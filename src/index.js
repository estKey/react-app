import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap'
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

//Register serviceworker
serviceWorker.unregister();
//serviceWorker.register();
