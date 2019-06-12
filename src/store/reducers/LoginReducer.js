import {
    GET_USER_FAILED,
    GET_USER_START,
    GET_USER_SUCCEED,
    LOGIN_FAILED,
    LOGIN_START,
    LOGIN_SUCCEED
} from "../actions/types";

const initialState = {
    isLoading: false,
    user: undefined,
    msg: undefined
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                isLoading: true,
                user: undefined,
                msg: undefined
            };
        case LOGIN_SUCCEED:
            return Object.assign({}, state,{
                status: true,
    });
case LOGIN_FAILED:
            return {
                isLoading: false,
                user: undefined,
                msg: action.msg
            };
        default:
            return state;
    }
}

export const getCurrentUser = (state = initialState, action)=> {
    switch (action.type) {
        case GET_USER_START:
            return {
                isLoading: true,
                user: undefined,
                msg: undefined
            };
        case GET_USER_SUCCEED:
            return {
                isLoading: false,
                user: action.user,
                msg: action.msg
            };
        case GET_USER_FAILED:
            return {
                isLoading: false,
                user: undefined,
                msg: action.msg
            };
        default:
            return state;
    }
};
