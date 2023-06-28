import React from "react";

const TodoLists=(props)=>{
    
   return (
     <div style={{display:"flex",gap:"2rem",marginTop:"1rem"}}>
       <p>{props.task}</p>
       <button>Delete</button>
    </div>
   )
}
export default TodoLists