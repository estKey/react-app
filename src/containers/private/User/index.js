import React, {Component, Fragment} from "react";
import {Switch, withRouter} from "react-router";
import {connect} from "react-redux";
import AuthRoute from "../../../components/accessories/AuthRoute";
import Profile from "./Profile";

class User extends Component{
    render() {
        return (
            <Fragment>
                <Switch>
                    <AuthRoute path={`${this.props.match.path}/:id/profile`} component={Profile} />
                </Switch>
            </Fragment>
        )
    }
}

export default withRouter(connect(

)(User))
