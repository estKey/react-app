import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './utils/serviceWorker';
import App from "./containers/App";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Intl from './components/Intl';
import history from './utils/history'
import {store, persistor} from './store';

const root = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
                <Intl>
                    <App />
                </Intl>
            </Router>
        </PersistGate>
    </Provider>
    , root);

serviceWorker.register();
