
import React, { useState, useEffect } from "react";
import s from "./UseEffect.module.css";
import Search from "./Search";
import UsersList from "./UsersList";
import User from "./User";

// const api = "https://api.github.com/search/users?q=it";


const Github = () => {
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
        <UsersList setSelectedUser={setSelectedUser} selectedUser={selectedUser}  searchTerm={searchTerm} setActiveUser={setActiveUser}/>
      </div>
      <User activeUser={activeUser} setActiveUser={setActiveUser}/>
    </section>
  );
};

export default Github;
