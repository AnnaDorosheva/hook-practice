import React, { useState, useEffect } from "react";
import s from "./TodoApp.module.css";
import TodoEditor from "./TodoEditor/TodoEditor";
import TodoList from "./TodoList/TodoList";

const Todo = () => {
  
  // todo list
  const [todos, setTodos] = useState([]);
  const addTodos = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  // delet dodo
  const deleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  // Local Storage
  useEffect(() => {
const persistedTodos = localStorage.getItem("todos");
if(persistedTodos) {
  setTodos(JSON.parse(persistedTodos));
}
  }, []);

  useEffect(() => {
localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  return (
    <div className={s.todoContainer}>
      <h2>Todo App ( Приложение для планирования задач )</h2>
      <p className={s.signature}>Create your day, create your life...</p>
      <TodoEditor onSave={addTodos} />
      <TodoList deleteTodo={deleteTodo} todos={todos} />
    </div>
  );
};

export default Todo;
