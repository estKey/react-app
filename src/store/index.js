import {createStore, applyMiddleware, compose} from "redux";
import {routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import history from "../utils/history"

const middleware = [thunk];
const initialState = {
};

export default createStore(
    rootReducer(history),
    initialState,
    compose(
        applyMiddleware(
            routerMiddleware(history),
            ...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        //** Deprecated **//
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

