import React from "react"
import {Route, Switch} from "react-router-dom";
import Index from "../containers/index";

class Routes extends React.Component{
    render() {
        return(
            <Switch>
                <Route path="/" exact component={Index} />
            </Switch>
        )
    }
}

export default Routes
