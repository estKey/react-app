import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import AuthRoute from "../components/accessories/AuthRoute";
import history from "../utils/history"
import Navigation, {NavItem} from "../components/layouts/Navigation";
import Home from "./routes/Home";
import Login from "./routes/Login";
import User from "./private/User"

function App() {
  return (
    <div className="App">
        <Navigation>
            <NavItem event={() => {history.push("/login")}} name={"Login"} />
            <NavItem event={() => {history.push("/")}} name={"Home"}/>
            {/*<NavItem event={() => this.changeLanguage()} name={locale === 'zh' ? '英文' : 'Chinese'}/>*/}
        </Navigation>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <AuthRoute path="/:user" component={User}/>
        </Switch>
    </div>
  );
}

export default App;
