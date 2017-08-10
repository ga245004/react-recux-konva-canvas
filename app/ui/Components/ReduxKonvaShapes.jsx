const React = require('react');
const ReactKonva = require('react-konva');
const {connect} = require('react-redux');

class ReduxKonvaShapes extends React.Component {

    propTypes :{
        shapes : React.PropTypes.array,
        shape : React.PropTypes.object.isRequired,
        events : React.PropTypes.array
    }

    getShape(shape, container) {
        
        if(!shape){
            return null;
        }

        shape.key = 'ReduxKonvaShapeComponet' 
                + (shape.key ?  shape.key : Math.floor(Math.random() * 20000));

        shape = Object.assign({
            x: 10,
            y: 10,
            width : 50,
            height: 50,
            color: Konva.Util.getRandomColor(),
            isFix: true,
            shadowBlur: 10
        }, shape);


        const ReactShape = ReactKonva[shape.type]; // Correct! JSX type can be a capitalized variable.
        return <ReactShape         
            ref= {shape.key} 
            key={shape.key}
            x={shape.x} 
            y={shape.y} 
            width={shape.width} 
            height={shape.height}
            draggable={shape.isFix}
            fill={shape.color}
            shadowBlur={shape.shadowBlur}
        >
         {container && container.length > 0 ? container : null}
        </ReactShape>;
    }


    renderComponent(){
        const shapes = this.props.shapes;
        const shape = this.props.shape;
        var isGroup = shapes && shapes.length > 0 && shape;        
        if(isGroup){
            return this.getShape(shape, [
                    <ReduxKonvaShapes shapes={shapes}>
                    </ReduxKonvaShapes>
            ]);
        }
        else if(shapes && shapes.length > 0){
           
            var container = [];
            for(var i=0; i < shapes.length ; i++){
                container.push(this.getShape(shapes[i]));
            }
            return this.getShape({type:'Group'}, container);
        }
        else if(shape){
            return this.getShape(shape);
        }

        return null;
    }

    render() {        
        return this.renderComponent();
    }
}

module.exports = ReduxKonvaShapes;