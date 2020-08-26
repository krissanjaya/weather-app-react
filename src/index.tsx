import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// make store available on our app
import {Provider} from 'react-redux';
import store from './store';
import '../node_modules/@material-ui/core';

ReactDOM.render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
