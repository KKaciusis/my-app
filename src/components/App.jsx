import React from 'react';
import ChangeColorButton from './ChangeColorButton';

class App extends React.Component {
    constructor(){
        super();
        this.state ={
            bg: 'palegreen',
            in: 'Choose Color'
        };
    }
    changeColorP = () => {
        this.setState({
            bg: 'palegreen',
        });
    }

    changeColorO = () => {
        this.setState({
            bg: 'orangered',
        });
    }

    changeColorG = () => {
        this.setState({
            bg: 'greenyellow',
        });
    }

    changeColor = (color) => {
        this.setState({
            bg: color,
        });
    }

    inChange = (e) => {
        this.setState({
            in: e.target.value,
        });
    }

    doColor = () => {
        this.setState(state => ({bg: state.in}));
    }


    render() {
        return (
            <div className="circle" style={{backgroundColor: this.state.bg}}>
                <input type="text" value={this.state.in} onChange={this.inChange}/>
                <button className="input-button" onClick={this.doColor}>Change Color</button>
            </div>
        );
    }
}

export default App;