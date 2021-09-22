import React, { useState } from 'react';

function SmallShape (props){

    const [editIn, setEditIn] = useState('');

    const editInputHandler = (e) => {
        setEditIn(e.target.value);
    }
    return (<div
    className="small-circle"
        style={{
            backgroundColor: props.color,
            borderRadius: props.shape === "circle" ? '50%' : '5px'
        }}>
            <span>{props.color}</span>
            <button className="input-button-small" onClick={()=>props.delete(props.id)}>Delete</button>
            <div className="center">
            <input type="text" value={editIn} onChange={editInputHandler}></input>
            <button className="input-button-small" onClick={()=> props.edit(props.id, editIn)}>edit color</button>
            </div>
            </div>);
};
export default SmallShape;