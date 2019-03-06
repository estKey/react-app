import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from "react-router-dom";
import './index.css';
import * as serviceWorker from './utils/serviceWorker';
import App from "./containers/App";
import { Provider } from 'react-redux';
import Intl from './components/Intl';
import history from './utils/history'
import store from "./store";

const root = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Intl>
            <Router history={history}>
                <App />
            </Router>
        </Intl>
    </Provider>
    , root);

serviceWorker.register();
