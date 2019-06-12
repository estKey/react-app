import {
    GET_USER_FAILED,
    GET_USER_START,
    GET_USER_SUCCEED,
    LOGIN_END,
    LOGIN_FAILED,
    LOGIN_START,
    LOGIN_SUCCEED
} from "./types";
import history from "../../utils/history"
import user from "../../utils/api/user";

export const startLogin = () => {
    return {
        type: LOGIN_START
    };
};

export const completeLogin = (data) => {
    console.log(data.success);
    if(data.success) {
        return {
            type: LOGIN_SUCCEED,
            user: data.user,
            status: data.success,
            msg: "Login Succeed"
        };
    }else {
        return {
            type: LOGIN_FAILED,
            user: data.user,
            status: data.success,
            msg: "Login Failed, "
        }
    }
};

export const endLogin = () => {
    return {
        type: LOGIN_END
    }
};

export default (inputJson) => {
    return (dispatch) => {
        dispatch(startLogin());
        user.loginUser(inputJson)
            .then(res => {
                // console.log(res.data.success);
                if (res.data.success) {
                    // window.alert('Login Succeed');
                    // console.log("Login Succeed");
                    dispatch(completeLogin(res.data));
                    history.push(`/:id/profile`)
                } else {
                    // console.log("Login Failed", res.data);
                    window.alert('Login Failed，用户名或密码错误');
                    dispatch(completeLogin(res.data))
                }
            }, (err) => {
                window.alert(err.message);
                // throw new Error(err.message);
                return err.message
            }
        )
    };
}

export const logoutAction =()=>{
    return (dispatch) => {
        dispatch(endLogin());
    }
};

export const startGetUser = () => {
    return {
        type: GET_USER_START
    }
};

export const completeGetUser = (user) => {
    if(user.status) {
        return {
            type: GET_USER_SUCCEED,
            user
        };
    }else {
        return {
            type: GET_USER_FAILED,
            user
        }
    }
};

export const getUser = () => {
    return (dispatch) => {
        dispatch(startGetUser());
    }
};
