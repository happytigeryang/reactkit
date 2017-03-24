import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

// require('file?name=[name].[ext]!./index.html');
require("html-loader!./index.html");
import App from './components/App';

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

//#https://github.com/gaearon/react-hot-loader
//#https://github.com/gaearon/react-hot-boilerplate/tree/next