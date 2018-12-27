import React from 'react'
import {NavLink, Route, Router, Switch} from "react-router-dom";
import props from 'prop-types';

import IndexPage from "./IndexPage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./users/LoginPage";
import RegisterPage from "./users/RegisterPage";
import AboutPage from "./AboutPage";
import UserPage from "./users/UserPage";

function Router_Config({ history }) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/404" component={NotFoundPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/register" exact component={RegisterPage} />
                <Route path="/about" exact component={AboutPage} />
            </Switch>
        </Router>
    );
}

const RouteConfig = [
    { path: "/", component: IndexPage, name: "IndexPage",
        routes: [ { path: "/about", component: AboutPage, name: "About" } ]
    },
    { path: "/user", component: UserPage, name: "UserPage",
        routes: [
        { path: "/user/login", component: LoginPage, name: "Login" },
        { path: "/user/register", component: RegisterPage, name: "Register" }
        ]
    },
    ];

const createLink = (routes, props) => (
    <ol>
        {
        routes.map(route => (
            <li key={route.path}>
                <NavLink to={`${props.match.url}/${route.path}`}>{route.name}</NavLink>
            </li> ))
        }
    </ol>
);

const createRoute = (routes, props) => (
    <React.Fragment>
        {
            routes.map((route, i) => {
                let obj = {
                    key: i, ...route, path: `${props.match.url}/${route.path}`, component: props => {
                        let obj = {routes: route.routes, ...props};
                        return <route.component {...obj}/> } };
                        return <Route {...obj}/>})}
            </React.Fragment>
);

const createRouter = (routes, props) => (
    <Router>
        <div>
            {/* auto generate NavLink tag */} {createLink(routes, props)} <hr/> {/* auto generate Route tag */} {createRoute(routes, props)}
            </div>
        </Router>
);
createRouter(RouteConfig, props);


export default Router_Config;