import React from 'react';
import SmallShape from './SmallShape';

class App extends React.Component {
    constructor(){
        super();
        this.state ={
            shapes: [],
            circleIn: ''

        };
    }
    addShape = (s) =>{
        const shape = {color: this.state.circleIn, shape: s};
        const shapes = this.state.shapes.slice();
        shapes.push(shape);
        this.setState({
            shapes: shapes
        })
        localStorage.setItem('allShapes', JSON.stringify(shapes))
    }

    circleInputHandler = (e) => {
        this.setState({
            circleIn: e.target.value,
        });
    }
    componentDidMount(){
        const shape = JSON.parse(localStorage.getItem('allShapes'));
        if (null === shape){
            return;
        }
        this.setState({
            shapes: shape
        })

    }

    render() {
        return (
            <>
            {this.state.shapes.map((b, i)=> <SmallShape key={i} color={b.color} shape={b.shape}/>)}
            <div>
                    <input type="text" value={this.state.circleIn} onChange={this.circleInputHandler}/>
                    <button className="input-button" onClick={()=>this.addShape('circle')}>Add Circle</button>
                    <button className="input-button" onClick={()=>this.addShape('sq')}>Add Sq</button>
            </div>
            </>

        );
    }
}

export default App;