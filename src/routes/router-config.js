import React from 'react'
import {Route, Router, Switch} from "react-router-dom";

import IndexPage from "./IndexPage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./users/LoginPage";
import RegisterPage from "./users/RegisterPage";
import AboutPage from "./AboutPage";

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="." component={NotFoundPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/register" exact component={RegisterPage} />

                <Route path="/about" exact component={AboutPage} />
            </Switch>
        </Router>
    );
}

export default RouterConfig;