

import React from 'react';
import { render } from 'react-dom';
require('jquery');


class App extends React.Component{

    constructor(){
        console.log('App.jsx');
    }

    render(){
        return <h2>Test</h2>;
    }
}

var div = $('<div />').appendTo('body')[0];

render( <App/>, div);