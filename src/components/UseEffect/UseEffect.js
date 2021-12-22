import axios from "axios";
import React, { useState, useEffect } from "react";
import s from "./UseEffect.module.css";

// const api = "https://api.github.com/search/users?q=it";

export const Search = (props) => {
  const [tempSearch, setTemlSearch] = useState(props.value);

  useEffect(() => {
    setTemlSearch(props.value)
    // return () => {
    //   cleanup
    // }
  }, [props.value]);

  return (
    <>
      <input
      value={tempSearch}
        onChange={(e) => {
          return setTemlSearch(e.target.value);
        }}
        placeholder="search..."
      ></input>
      <button onClick={() => props.onSubmit(tempSearch)}>Find</button>
    </>
  );
};

const Github = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [activeUser, setActiveUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("annadorosheva");

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser.login;
    }
  }, [selectedUser]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/search/users?q=${searchTerm}&per_page=10`)
      .then((responce) => setUsers(responce.data.items));
  }, [searchTerm]);

  useEffect(() => {
    if (selectedUser) {
      axios
        .get(`https://api.github.com/users/${selectedUser.login}`)
        .then((responce) => setActiveUser(responce.data));
    }
  }, [selectedUser]);


  return (
    <section className={s.container}>
      <div>
        <Search value={searchTerm} onSubmit={(value) => setSearchTerm(value)}/>
        <button onClick={() => {setSearchTerm(".."); setActiveUser(null)}}>Reset</button>
        {/* <input
          onChange={(e) => {
            return setTemlSearch(e.target.value);
          }}
          placeholder="search..."
        ></input>
        <button onClick={() => setSearchTerm(tempSearch)}>Find</button> */}
        <ul className={s.usersNames}>
          {users.map((u) => (
            <li
              key={u.id}
              onClick={() => {
                setSelectedUser(u);
              }}
              className={selectedUser === u ? s.selected : ""}
            >
              {u.login}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>User name</h2>
        {activeUser && (
          <div className={s.user}>
            <img src={activeUser.avatar_url} alt="avatar" width="300" />
            <p>Login: {activeUser.login}</p>
            <p>Name: {activeUser.name}</p>
            <p>Location: {activeUser.location}</p>
            <a href={activeUser.html_url}>URL on github</a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Github;
