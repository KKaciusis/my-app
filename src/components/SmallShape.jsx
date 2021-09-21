import React from 'react';

class SmallShape extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            editIn: ''

        };
    }
render(){
    return (<div
    className="small-circle"
        style={{
            backgroundColor: this.props.color,
            borderRadius: this.props.shape === "circle" ? '50%' : '5px'
        }}>
            <span>{this.props.color}</span>
            <button className="input-button-small" onClick={()=>this.props.delete(this.props.id)}>Delete</button>
            <div className="center">
            <input type="text"></input>
            <button className="input-button-small" onClick={()=>this.props.delete(this.props.id)}>edit color</button>
            </div>
            </div>);
}};
export default SmallShape
