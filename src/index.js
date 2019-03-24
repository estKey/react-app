import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import App from './app/App';

const renderDom = Component => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );
};
renderDom(App);

if (module.hot) {
    module.hot.accept('./app/App', () => {
        const App = require('./app/App').default;
        renderDom(App);
    })
}
