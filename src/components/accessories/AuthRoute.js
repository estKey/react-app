import { Redirect, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AuthRoute extends Component {
    render() {
        console.log(this.props);
        let { location, ...other } = this.props;
        const status = this.props.status;
        console.log("Status", status);
        return status ?
            <Route {...other} /> :
            <Redirect to={{pathname: "/"}} />;
    }
}

const mapStateToProps = (state) => {
    return state.login.status
};

export default connect(mapStateToProps, null)(AuthRoute)
