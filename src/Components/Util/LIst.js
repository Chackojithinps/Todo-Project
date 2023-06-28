import React from "react";
import TodoLists from "./TodoLists";
const List=(props)=>{

    return (
        <div>
            <h1>Todo Project</h1>
            {props.todos.map((task)=>(
                <TodoLists {...task}/>
            ))}
           
        </div>
    )
}
export default List