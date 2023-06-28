import React from "react";
import List from '../Util/LIst'
const App=()=>{
  const todos=[
    {   
        id:1,
        task:"Learn react",
        isCompleted:true
    },
     {  
        id:2,
        task:"Learn Js",
        isCompleted:false
    },
    {  
         id:1,
        task:"Learn SQL",
        isCompleted:true
    },
    {   
        id:1,
        task:"Learn DS",
        isCompleted:false
    },
    
]
   return (
     <>
        <List todos={todos}/>
     </>
   )
}
export default App;
