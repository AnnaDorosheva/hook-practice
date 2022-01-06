import React, { useState } from "react";
import s from "./TodoEditir.module.css";
import shortid from "shortid";

const TodoEditor = ({ onSave }) => {
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };
  const submitTodo = (e) => {
    e.preventDefault();
    const todo = {
      id: shortid.generate(),
      text: todoText,
    };
    onSave(todo);
    setTodoText("");
  };
  return (
    <div>
      <form onSubmit={submitTodo}>
        <input type="text" value={todoText} onChange={onChangeTodoText} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TodoEditor;
