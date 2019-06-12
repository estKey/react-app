import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import LoginAction from "../../store/actions/LoginAction";

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: ""
        };
        this.userChange = this.userChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.postRequest = this.postRequest.bind(this);
    }

    userChange(e){
        this.setState({ username : e.target.value })
    }

    passwordChange(e){
        this.setState({ password : e.target.value })
    }

    handleLogin() {
        // console.log(this.state.user);
        if(this.state.username === "" || this.state.username === "" )
            window.alert("username and password cannot be empty");
        else this.postRequest();
    }

    postRequest(){
        const data= {
            user: {
                username: this.state.username,
                password: this.state.password
            }};
        console.log(data);
        this.props.LoginAction(data)
    }

    handleReset(){
        this.setState({ username : "" });
        this.setState({ password : "" });
        this.forceUpdate()
    }

    render() {

        return(
            <Fragment>
                <input id='user' placeholder='用户名' onChange={this.userChange}/><br/>
                <input id='password' type='password' placeholder='密码' onChange={this.passwordChange}/>
                <button type="submit" onClick={this.handleLogin} >Login</button>
                <button onClick={this.handleReset} >Reset</button>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ login }) => {
    const { isLoading, user, msg } = login;
    return { isLoading, user, msg };
};

export default withRouter(connect(
    mapStateToProps,
    {LoginAction}
)(Login))
