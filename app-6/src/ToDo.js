import React from 'react';

export default function ToDo(props){
    let {fn1, fn2, input} = props
return(
    <div>
        <h1>My To-Do List:</h1>
        <input  value={input} onChange={(e)=> fn1(e.target.value)} placeholder="Enter new task"/>
        <button onClick={fn2}>Add</button>
    </div> 
)
}