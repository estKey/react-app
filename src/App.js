import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';

//Pages
import IndexPage from "./routes/IndexPage";
import NotFoundPage from "./routes/NotFoundPage";
import LoginPage from "./routes/users/LoginPage";
import RegisterPage from "./routes/users/RegisterPage";
import AboutPage from "./routes/AboutPage";
//Components
import Navbar from "./components/layout/navbar/Navbar";

class App extends Component {
  render() {
    return (
        <Router>
            <body>
            <section className="Nav-panel">
                <Navbar/>
            </section>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={IndexPage} />
                    <Route path="/404" exact component={NotFoundPage} />
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/register" exact component={RegisterPage} />
                    <Route path="/about" exact component={AboutPage} />
                    <Redirect to="/404" />
                </Switch>
            </div>
            </body>
        </Router>
    );
  }
}

export default App;
