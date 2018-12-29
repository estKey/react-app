import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';

//Pages
import IndexPage from "./routes/IndexPage";
import NotFoundPage from "./routes/NotFoundPage";
import LoginPage from "./routes/users/LoginPage";
import RegisterPage from "./routes/users/RegisterPage";
import AboutPage from "./routes/AboutPage";
import UserPage from "./routes/users/UserPage";
//Components
import Navbar from "./components/layout/navbar/Navbar";
import FooterTab from "./components/layout/footer/FooterTab";

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <header className="Nav-panel" style={{display:"block"}}>
                    <Navbar/>
                </header>
                <span className="-row-spaced"/>
                <div className="App App-body" style={{display:"block"}}>
                    <Switch>
                        <Route path="/" exact component={IndexPage} />
                        <Route path="/404" exact component={NotFoundPage} />
                        <Route path="/user" exact component={UserPage} />
                        <Route path="/user/login" exact component={LoginPage} />
                        <Route path="/user/register" exact component={RegisterPage} />
                        <Route path="/about" exact component={AboutPage} />
                        <Redirect from="*" to="/404/" />
                    </Switch>
                </div>
                <span className="-row-spaced" />
                <footer className="App-footer" style={{display:"block"}}>
                    <FooterTab/>
                </footer>
            </div>
        </Router>
    );
  }
}

export default App;
