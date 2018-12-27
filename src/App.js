import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import IndexPage from "./routes/IndexPage";
import NotFoundPage from "./routes/NotFoundPage";
import LoginPage from "./routes/users/LoginPage";
import RegisterPage from "./routes/users/RegisterPage";
import AboutPage from "./routes/AboutPage";

class App extends Component {
  render() {
    return (
        <Router>
            <body>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={IndexPage} />
                    <Route path="/404" component={NotFoundPage} />
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/register" exact component={RegisterPage} />
                    <Route path="/about" exact component={AboutPage} />
                </Switch>
            </div>
            </body>
        </Router>
    );
  }
}

export default App;
