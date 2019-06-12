import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";

class Home extends Component{
    render() {
        return (
            <Fragment>
                <div>Home</div>
            </Fragment>
        )
    }
}

export default withRouter(connect(

)(Home))
