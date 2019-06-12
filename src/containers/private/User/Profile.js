import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";

class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount() {
        console.log("path", this.props.match.path, "url", this.props.match.url);
        console.log("id", this.props.match.param.user)
    }

    render() {
        return (
            <Fragment>
                <div>Profile</div>
            </Fragment>
        )
    }
}

export default withRouter(connect(

)(Profile))
