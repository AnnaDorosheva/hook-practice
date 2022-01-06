import React from 'react';
import s from "./TodoList.module.css";

const TodoList = ({todos, deleteTodo}) => {
  return (
    <div className={s.todoListContainer}>
            {todos.length > 0 && (
        <ul className={s.todoContainer}>
          {todos.map(({ id, text }) => (
            <li key={id} className={s.todo}>
              <p className={s.textTodo}>{text}</p>
              <button onClick={() => deleteTodo(id)} className={s.buttonDelete}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      
    </div>
  )
};

export default TodoList;

