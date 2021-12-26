
import React, { useState, useEffect } from "react";
import s from "./UseEffect.module.css";
import Search from "./Search";
import UsersList from "./UserList/UsersList";
import User from "./User/User";

// const api = "https://api.github.com/search/users?q=it";


const GithubSearchUsers = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [activeUser, setActiveUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("it");

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser.login;
    }
  }, [selectedUser]);

  return (
    <section className={s.container}>
      <div>
        <Search value={searchTerm} onSubmit={setSearchTerm}/>
        <button onClick={() => {setSearchTerm("a"); setActiveUser(null)}}>Reset</button>
        <h2>Users:</h2>
        <UsersList setSelectedUser={setSelectedUser} selectedUser={selectedUser}  searchTerm={searchTerm} setActiveUser={setActiveUser}/>
      </div>
      <User activeUser={activeUser} setActiveUser={setActiveUser}/>
    </section>
  );
};

export default GithubSearchUsers;
