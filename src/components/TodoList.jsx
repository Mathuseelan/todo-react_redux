import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Slices/todoSlice";
import '../styles/todoList.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todoos);
  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(removeTodo(index));
  };

  return (
    <div className="todoList">
      <h2 className="todoList__heading">Todo List</h2>
      <ul className="todoList__list">
        {todos.map((todo, index) => (
          <li className="todoList__item" key={index}>
            {todo} <button className="todoList__button" onClick={() => handleClick(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
