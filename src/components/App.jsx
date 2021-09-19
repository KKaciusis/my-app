import React from 'react';


class App extends React.Component {
    constructor(){
        super();
        this.state ={
            bg: 'white',
            bgIn: 'color input',
            size: 100,
            sizeIn: 'size input'
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


    render() {
        return (
            <div className="circle" style={{backgroundColor: this.state.bg, width: this.state.size+'px', height: this.state.size+'px'}}>
                <div>
                <input type="text" value={this.state.bgIn} onChange={this.inChangeColor}/>
                <input type="text" value={this.state.sizeIn} onChange={this.inChangeSize}/>
                <button className="input-button" onClick={this.doSize}>Change Size</button>
                <button className="input-button" onClick={this.doColor}>Change Color</button>
            </div>
            </div>
        );
    }
}

export default App;