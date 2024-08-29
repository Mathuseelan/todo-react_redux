import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Slices/todoSlice";
import '../styles/todoForm.css'

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    return inputValue && (dispatch(addTodo(inputValue)),setInputValue(""))
  };

  return (
    <form className="todoForm" action="#">
      <input
      className="todoForm__input"
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button className="todoForm__button" onClick={handleClick}>Add </button>
    </form>
  );
};

export default TodoForm;
