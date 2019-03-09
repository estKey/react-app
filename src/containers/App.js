import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Index from "./Index/Index";

class App extends Component {
  render() {
    return (
        <Switch>
          <Route path="/" exact component={Index} />
        </Switch>
    );
  }
}
export default (App);
