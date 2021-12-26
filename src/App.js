import React from "react";
import s from "./App.module.css";
import UseStateGame from "./components/UseState/UseStateGame";
import GithubSearchUsers from "./components/UseEffect/UseEffect";

function App() {
  return (
    <div className={s.App}>
      <GithubSearchUsers />
      <UseStateGame />
    </div>
  );
}

export default App;
