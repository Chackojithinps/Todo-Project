import React, { useEffect } from "react";
import TodoLists from "./TodoLists";
import {useState} from 'react'
const List=(props)=>{
    const [state,setState]=useState([])
    const [input,setInput]=useState("")
    
    const Local_Storage_Key='react-app-todos'

    useEffect(()=>{
        const storedItem=JSON.parse(localStorage.getItem(Local_Storage_Key))
        if(storedItem) setState(storedItem)
    },[])
    useEffect(()=>{
        if(state.length>0){

            localStorage.setItem(Local_Storage_Key,JSON.stringify(state))
        }
    },[state])

    const handleInput=(e)=>{
         setInput(e.target.value);
    }
   
    const addItems=()=>{
        setState([...state,input])
        setInput("")
    }
    return (
        <div>
            <h1>Todo Project</h1>
            <input onChange={handleInput} type="text" value={input}/>
            <button onClick={addItems}>Add items</button>
            {state.map((task)=>(
                <TodoLists task={task}/>
            ))}
           
        </div>
    )
}
export default List