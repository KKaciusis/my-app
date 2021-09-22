import React from 'react';

class SmallShape extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            editIn: ''
        };
    }
    editInputHandler = (e) => {
        this.setState({
            editIn: e.target.value,
        });
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
            <input type="text" value={this.state.editIn} onChange={this.editInputHandler}></input>
            <button className="input-button-small" onClick={()=>this.props.edit(this.props.id, this.state.editIn)}>edit color</button>
            </div>
            </div>);
}};
export default SmallShape
