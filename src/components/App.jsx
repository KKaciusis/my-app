import React from 'react';


class App extends React.Component {
    constructor(){
        super();
        this.state ={
            bg: 'white',
            bgIn: 'color input',
            size: 100,
            sizeIn: 'size input',
            shapeSquere: false,
        };
    }
    inChangeSize = (e) => {
        this.setState({
            sizeIn: e.target.value,
        });
    }

    inChangeColor = (e) => {
        this.setState({
            bgIn: e.target.value,
        });
    }
    doSize = () => {
        this.setState(state => ({size: state.sizeIn}));
    }

    doColor = () => {
        this.setState(state => ({bg: state.bgIn}));
    }
    inChangeShape = () => {
        this.setState(state => ({shapeSquere: (!state.shapeSquere)}))
    }


    render() {
        return (
            <div className="circle" style={{backgroundColor: this.state.bg, width: this.state.size+'px', height: this.state.size+'px'}}>
                <div>
                <input type="text" className="inputs" value={this.state.bgIn} onChange={this.inChangeColor}/>
                <input type="text" value={this.state.sizeIn} onChange={this.inChangeSize}/>
                <button className="input-button" onClick={this.doSize}>Change Size</button>
                <button className="input-button" onClick={this.doColor}>Change Color</button>
                <input id="check" type="checkbox" checked={this.state.shapeSquere} onChange={this.inChangeShape}/>
                <label for="check">Change shape</label>
            </div>
            </div>
        );
    }
}

export default App;