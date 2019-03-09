import React, { Component } from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
// Route Pages
import Index from "./Index";
import NotFound from "./NotFound";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/404" exact component={NotFound} />
                <Redirect from="*" to="/404" />
            </Switch>
        );
    }
}

export default App;
