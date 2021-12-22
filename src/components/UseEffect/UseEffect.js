
import React, { useState, useEffect } from "react";
import s from "./UseEffect.module.css";
import Search from "./Search";
import UsersList from "./UsersList";
import User from "./User";

// const api = "https://api.github.com/search/users?q=it";


const Github = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [activeUser, setActiveUser] = useState(null);
  // const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("annadorosheva");

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser.login;
    }
  }, [selectedUser]);

  return (
    <section className={s.container}>
      <div>
        <Search value={searchTerm} onSubmit={(value) => setSearchTerm(value)}/>
        <button onClick={() => {setSearchTerm(".."); setActiveUser(null)}}>Reset</button>
        <UsersList setSelectedUser={setSelectedUser} selectedUser={selectedUser}  searchTerm={searchTerm} setActiveUser={setActiveUser}/>
      </div>
      <User activeUser={activeUser}/>
      {/* <div>
        <h2>User info:</h2>
        {activeUser && (
          <div className={s.user}>
            <img src={activeUser.avatar_url} alt="avatar" width="300" />
            <p>Login: {activeUser.login}</p>
            <p>Name: {activeUser.name}</p>
            <p>Location: {activeUser.location}</p>
            <a href={activeUser.html_url}>URL on github</a>
          </div>
        )}
      </div> */}
    </section>
  );
};

export default Github;
