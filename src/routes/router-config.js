import React from 'react'
import {Route, Router, Switch} from "react-router-dom";

import IndexPage from "./IndexPage";
import AboutPage from "./AboutPage";

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/about" exact component={AboutPage} />
            </Switch>
        </Router>
    );
}

export default RouterConfig;