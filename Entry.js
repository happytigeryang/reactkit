import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './Lezhi/App';

const rootApp = <AppContainer><App/></AppContainer>;
const rootEl = document.getElementById('app');

ReactDOM.render(rootApp, rootEl);

if (module.hot) {
    console.log(1);
    module
        .hot
        .accept(App, ReactDOM.render(rootApp, rootEl));
        console.log(1);
}