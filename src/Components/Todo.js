import React, { useState, useRef, useEffect } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { BsCheck2All } from "react-icons/bs";
import "./Todo.css";
function Todo() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    setTodoInput(e.target.value);
  };

  const handleTodos = () => {
    setTodos([...todos, todoInput]);
    setTodoInput("");
  };

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
        <button onClick={handleTodos}>ADD</button>
      </form>
      <div className="list">
        <ul>
          {todos.map((task) => (
            <li className="list-items">
              <div className="list-item-list">{task}</div>
              <span>
                <BsCheck2All
                  className="list-item-icons"
                  id="complete"
                  title="Complete"
                />
                <BiSolidEdit
                  className="list-item-icons"
                  id="edit"
                  title="Edit"
                />
                <AiFillDelete
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
