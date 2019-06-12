import { combineReducers } from 'redux';
import {connectRouter} from "connected-react-router";
import LoginReducer from './LoginReducer';

export default (history) => combineReducers({
    login: LoginReducer,
    router: connectRouter(history)
})
