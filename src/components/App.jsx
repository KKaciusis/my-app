import React from 'react';


class App extends React.Component {
    constructor(){
        super();
        this.state ={
            bg: 'palegreen',
            bgIn: ''
        };
    }

    inChangeColor = (e) => {
        this.setState({
            bgIn: e.target.value,
        });
    }

    doColor = () => {
        this.setState(state => ({bg: state.bgIn}));
    }


    render() {
        return (
            <div className="circle" style={{backgroundColor: this.state.bg}}>
                <div>
                <input type="text" value={this.state.bgIn} onChange={this.inChangeColor}/>
                <button className="input-button" onClick={this.doColor}>Change Color</button>
            </div>
            </div>
        );
    }
}

export default App;