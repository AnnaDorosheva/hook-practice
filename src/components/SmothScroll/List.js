import React, { useState, useRef } from "react";
import useScroll from "./Scroll";

const List = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("")
  const limit = 3;

  const parent = useRef(null);
  const child = useRef(null);
  const intersected = useScroll(parent, child, () => fetchTodos(limit, page));

  function fetchTodos(limit, page) {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTodos((prev) => [...prev, ...data]);
        setPage((prev) => prev + 1);
      }).catch(error => setError(error));
  };

  return (
  
      <div style={{ overflow: "auto", height: "50vh" }} ref={parent}>
        {error ? <h1>Some error...</h1> : (todos.map((todo) =>           <p
            key={todo.id}
            style={{ margin: 8, padding: 30, border: "2px solid grey" }}
          >
            {todo.id}. {todo.title}
          </p>))}
      <div ref={child} style={{ height: 20, background: "blue" }}></div>
      </div>
  )};

  export default List;
