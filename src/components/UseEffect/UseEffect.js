import axios from "axios";
import React from "react";
import s from "./UseEffect.module.css";

// const api = "https://api.github.com/users?q=it";

const Github = () => {
  const [selectedUser, setSelectedUser] = React.useState("");
  const [users, setUsers] = React.useState([]);

  React.useEffect (() => {
if(selectedUser) {
  document.title = selectedUser.login;
}
  }, [selectedUser]);

  React.useEffect(() => {
axios.get("https://api.github.com/users?q=it").then(responce => setUsers(responce.data));
  }, [])

  return (
    <section className={s.container}>
      <div>
        <input placeholder="search..."></input>
        <button>Find</button>
        <ul>
          {users.map((u, idx) => (
            <li
              key={idx}
              onClick={() => {
                console.log(u.login);
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
        <p>Details</p>
      </div>
    </section>
  );
};

export default Github;
