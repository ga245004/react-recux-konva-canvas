const ActionTypes  = require('./ActionTypes')

const Actions = {
     onRefreshKonvaGraph: function(state){
        dispatch({type:ActionTypes.REFRESH_KONVA_GRAPH, konvaGraphState:state});
    }
}

module.exports = Actions;