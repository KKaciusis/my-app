import React, { useState, useEffect } from 'react';
import SmallShape from './SmallShape';
import getId from '../shared/id';

function App() {
    
    const [shapes, setShape] = useState([]);
    const [colorIn, setColorIn] = useState('');
    useEffect(()=>{

    });

  const  addShape = (s) =>{
        const shape = {id: getId(), color: colorIn, shape: s};
        const shapess = shapes.slice();
        shapess.push(shape);
        setShape(shapess)
        localStorage.setItem('allShapes', JSON.stringify(shapes));
    }
  const  deleteShape = (id) => {
        console.log(id)
        const shapess = shapes.slice();
        for(let i = 0; i < shapess.length; i++){
            if(shapes[i].id === id){
                shapess.splice(i, 1);
                break;
            }
        }
        setShape(shapess)
        localStorage.setItem('allShapes', JSON.stringify(shapes));
    }
   const editShape = (id, color) => {
        console.log(id)
        const shapess = shapes.slice();
        for(let i = 0; i < shapess.length; i++){
            if(shapess[i].id === id){
                shapess[i].color = color;
                break;
            }
        }
        setShape(shapess)
        localStorage.setItem('allShapes', JSON.stringify(shapess));
    }

   const colorInputHandler = (e) => {
        setColorIn(e.target.value);
    }

    useEffect(() => {
        const shapess = JSON.parse(localStorage.getItem('allShapes'));
        if (null === shapess){
            return;
        }
        setShape(shapess)
    }, [])

        return (
            <>
            {shapes.map(b => <SmallShape key={b.id} delete={deleteShape} edit={editShape} id={b.id} color={b.color} shape={b.shape}/>)}
            <div>
                    <input type="text" value={colorIn} onChange={colorInputHandler}/>
                    <button className="input-button" onClick={()=> addShape('circle')}>Add Circle</button>
                    <button className="input-button" onClick={()=> addShape('sq')}>Add Sq</button>
            </div>
            </>

        );
}



export default App;