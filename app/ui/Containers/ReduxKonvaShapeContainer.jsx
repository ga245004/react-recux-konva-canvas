
const {connect} = require('react-redux');
const ReactKonva = require('react-konva');

const ReduxKonvaShapes = require('../Components/ReduxKonvaShapes');

class ReduxKonvaShapeContainer extends React.Component {

    render() {
        let container = null;
        const graphState = this.props.konvaGraphState;
        let ActiveStage;
        if(graphState && graphState.Stages){
            ActiveStage = graphState.Stages[graphState.ActiveStage]; 
            container = [];           
            for(var i=0; i< ActiveStage.Layers.length; i++){

                container.push(
                    <ReactKonva.Layer key={'Layer' + i} ref={'Layer' + i}>
                        <ReduxKonvaShapes shapes={ActiveStage.Layers[i].shapes} />
                    </ReactKonva.Layer>
                );
            }
        }

        return <ReactKonva.Stage height={this.props.height} width={this.props.width} style={this.props.style}>
            {
                container
            }
            </ReactKonva.Stage>;
    }

}

var mapStateToProps = function(state){   
    return {
        konvaGraphState: state.konvaGraphState
    };
};

var mapDispatchToProps = function(dispatch){
    return {
        onRefreshKonvaGraph: function(shape){ 
            dispatch(actions.onRefreshKonvaGraph(shape));
        }
    }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ReduxKonvaShapeContainer);