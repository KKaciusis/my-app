import React, { useState, useEffect } from 'react';
import SmallShape from './SmallShape';
import getId from '../shared/id';

function App() {
    
    const [shapes, setShape] = useState([]);
    const [colorIn, setColorIn] = useState('');

    const  addShape = (s) => {

        const shape = {id: getId(), color: colorIn, shape: s, location1: true};
        const shapess = shapes.slice();
        
        shapess.push(shape);
        setShape(shapess);
        localStorage.setItem('allShapes', JSON.stringify(shapess));
    }

    const  deleteShape = (id) => {
        
        const shapess = shapes.slice();

        for(let i = 0; i < shapess.length; i++){
            if(shapes[i].id === id){

                shapess.splice(i, 1);
                break;
            }
        }

        setShape(shapess);
        localStorage.setItem('allShapes', JSON.stringify(shapess));
    };

   const editShape = (id, color) => {
        
        const shapess = shapes.slice();

        for(let i = 0; i < shapess.length; i++){
            if(shapess[i].id === id){
                shapess[i].color = color;
                break;
            }
        }

        setShape(shapess)
        localStorage.setItem('allShapes', JSON.stringify(shapess));
    };

    const changeLocation= (id) => {
        const shapess = shapes.slice();

        for(let i = 0; i < shapess.length; i++){
            if(shapess[i].id === id){
                shapess[i].location1 = !shapess[i].location1;
                break;
            }
        }
        setShape(shapess);
        localStorage.setItem('allShapes', JSON.stringify(shapess));
    };

   const colorInputHandler = (e) => {
        setColorIn(e.target.value);
    };

    useEffect(() => {

        const shapess = JSON.parse(localStorage.getItem('allShapes'));
        if (null === shapess){
            return;
        }

        setShape(shapess)
    }, []);

    return (
        <>
        <div className="field">
            <div className="farm">
            <h3>Location 1</h3>
            {shapes.map(b => <SmallShape location1={b.location1} locationNumber={1} key={b.id} delete={deleteShape} change={changeLocation} edit={editShape} id={b.id} color={b.color} shape={b.shape}/>)}
            </div>
            <div className="farm">
            <h3>Location 2</h3>
            {shapes.map(b => <SmallShape location1={b.location1} locationNumber={2} key={b.id} delete={deleteShape} change={changeLocation} edit={editShape} id={b.id} color={b.color} shape={b.shape}/>)}
            </div>
            </div>
        <div>
                <input type="text" value={colorIn} onChange={colorInputHandler}/>
                <button className="input-button" onClick={()=> addShape('circle')}>Add Circle</button>
                <button className="input-button" onClick={()=> addShape('sq')}>Add Sq</button>
        </div>
        </>

    );
}

export default App;