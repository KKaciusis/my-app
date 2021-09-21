import React from 'react';
import SmallCircle from './SmallCircle';

class App extends React.Component {
    constructor(){
        super();
        this.state ={
            circles: [],
            circleIn: ''

        };
    }
    addCircle = (e) =>{
        const circle = {color: this.state.circleIn};
        const circles = this.state.circles.slice();
        circles.push(circle);
        this.setState({
            circles:  circles
        })
        localStorage.setItem('allcircles', JSON.stringify(circles))
    }
    circleInputHandler = (e) => {
        this.setState({
            circleIn: e.target.value,
        });
    }
    componentDidMount(){
        const circle = JSON.parse(localStorage.getItem('allcircles'));
        if (null === circle){
            return;
        }
        this.setState({
            circles: circle
        })

    }

    render() {
        return (
            <>
            {this.state.circles.map((b, i)=> <SmallCircle key={i} color={b.color}/>)}
            <div>
                    <input type="text" value={this.state.circleIn} onChange={this.circleInputHandler}/>
                    <button className="input-button" onClick={()=>this.addCircle('circle')}>Add Circle</button>
                    <button className="input-button" onClick={()=>this.addCircle('sheep')}>Add Sq</button>
            </div>
            </>

        );
    }
}

export default App;