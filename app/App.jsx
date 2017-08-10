
const React = require('react');
const ReduxKonvaShapeContainer = require('./ui/Containers/ReduxKonvaShapeContainer')

class App extends React.Component {

    constructor(props) {
        super(props);
        console.log('App.jsx');
        this.state = { height : 0, width: 0 };
    }

    updateDimensions() {
        if(this.refs.screen){
            const height = this.refs.screen.clientHeight;
            const width = this.refs.screen.clientWidth;
            this.setState({width: width, height: height});
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    componentWillMount() {
        this.updateDimensions();
    }

    render() {
        return <div ref = 'screen'>
            <h2 > 
                Reactive Painter     
                <div style={{float:'right', bottom: '0px'}}>
                    <b>width: {this.state.width - 2}px; height: {this.state.height}</b>
                </div>   
            </h2>
            <ReduxKonvaShapeContainer 
                height={this.state.height} 
                width={this.state.width} 
                style={{margin: '5px', background: 'gray'}} />
            
            
        </div>;
    }
}

module.exports = App;