import React from "react";
import { Routes, Route } from "react-router-dom";
import s from "./App.module.css";
import UseStateGame from "./components/UseState/UseStateGame";
import GithubSearchUsers from "./components/UseEffect/UseEffect";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className={s.App}>
      <Navigation />
      <Routes>
        <Route path="useeffect" element={<GithubSearchUsers />} />
        <Route path="usestate" element={<UseStateGame />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
