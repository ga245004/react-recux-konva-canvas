import React from 'react';
import { render } from 'react-dom';
require('jquery');

import { createStore , combineReducers } from 'redux';
import { Provider } from 'react-redux';


var store = require('./redux/reducers/rootReducer').default;

 var App = require('./App');
 import { AppContainer } from 'react-hot-loader';

render( 
<Provider store={store}> 
    <App />
</Provider> , document.getElementById('reactRender'));