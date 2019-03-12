import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

import * as serviceWorker from "./utils/serviceWorker";
// render
ReactDOM.render(
    <App />
    , document.getElementById('app')
);
// register serviceWorker
serviceWorker.register();
