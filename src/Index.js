import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// require('file?name=[name].[ext]!./index.html');
// require("html-loader!./index.html");

const rootApp = <AppContainer><App/></AppContainer>;
const rootEl = document.getElementById('app');

ReactDOM.render(rootApp, rootEl);

if (module.hot) {
    module.hot.accept(App, ReactDOM.render(rootApp, rootEl));
}

//#https://github.com/gaearon/react-hot-loader
//#https://github.com/gaearon/react-hot-boilerplate/tree/next