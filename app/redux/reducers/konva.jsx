var Types = require("../action/ActionTypes"),
    initialState = require("./initialstate");

module.exports = function(state, action){
    var newstate = Object.assign({},state);
    switch(action.type){
        case Types.REFRESH_KONVA_GRAPH:



            newstate = action.konvaGraphState;



            return newstate;
        default: return state || initialState().konvaGraphState;
    }
};