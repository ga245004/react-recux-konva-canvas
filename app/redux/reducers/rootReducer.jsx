import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import {default as thunk} from 'redux-thunk'; // allows us to use asynchronous actions

var  initialState = require("./initialstate");
var konvaReducer = require("./konva");
 

var rootReducer = combineReducers({
    konvaGraphState: konvaReducer
});

export default  compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)(rootReducer,initialState());