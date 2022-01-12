import React, { useState, useEffect, useRef } from "react";
import useScroll from "./Scroll";

const List = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 8;

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
      });
  };

  return (
    <div style={{ overflow: "auto", height: "80vh" }} ref={parent}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ margin: 8, padding: 30, border: "2px solid grey" }}
          >
            {todo.id}. {todo.title}
          </li>
      </ul>
      <div ref={child} style={{ height: 20, background: "blue" }}></div>
    </div>