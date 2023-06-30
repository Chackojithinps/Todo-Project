import React, { useState, useRef, useEffect } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { BsCheck2All } from "react-icons/bs";
import "./Todo.css";
function Todo() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId,setEditid] =useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    setTodoInput(e.target.value);
  };

  const handleTodos = () => {
    if(todoInput!==""){
    setTodos([...todos,{id:Date.now(),todoInput:todoInput,status:false}]);
    setTodoInput("");
    }
    if(editId){
      const editTodo=todos.find((task)=>task.id===editId)
      const updateTodo=todos.map((task)=>task.id===editTodo.id
      ?(task={id:task.id,todoInput:todoInput})
      :(task={id:task.id,todoInput:task.todoInput}))
      setTodos(updateTodo)
      setTodoInput("")
      setEditid(0)
    }
  };
  
  const onComplete=(id)=>{
     let complete=todos.map((task)=>{
        if(task.id===id){
          return ({...task,status:!task.status})
        }else{
          return task
        }
     })
     setTodos(complete)
  }  
  const handleDelete=(id)=>{
      setTodos(todos.filter((task)=>task.id!==id))
  }
  const handleEdit=(id)=>{
    const editTodo=todos.find((task)=>task.id===id)
    setTodoInput(editTodo.todoInput)
    setEditid(editTodo.id)
  }

  const inputRef = useRef("null");
  useEffect(() => {
    // console.log(inputRef.current)
    inputRef.current.focus();
  });

  return (
    <div className="container">
      <h2>TODO APP</h2>
      <form className="form-group" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoInput}
          ref={inputRef}
          placeholder="Enter your todoList"
          className="form-control"
          onChange={handleInput}
        />
        <button onClick={handleTodos}>{editId?"EDIT":"ADD"}</button>
      </form>
      <div className="list">
        <ul>
          {todos.map((task) => (
            <li className="list-items">
              <div className="list-item-list" id={task.status?"list-item":null}>{task.todoInput}</div>
              <span>
                <BsCheck2All
                  className="list-item-icons"
                  id="complete"
                  title="Complete"
                  onClick={()=>onComplete(task.id)}
                />
                <BiSolidEdit
                  className="list-item-icons"
                  id="edit"
                  title="Edit"
                  onClick={()=>handleEdit(task.id)}
                />
                <AiFillDelete
                  onClick={()=>handleDelete(task.id)}
                  className="list-item-icons"
                  id="delete"
                  title="Delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
