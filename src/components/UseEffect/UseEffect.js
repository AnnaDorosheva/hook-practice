import axios from "axios";
import React, {useState, useEffect} from "react";
import s from "./UseEffect.module.css";

// const api = "https://api.github.com/search/users?q=it";

const Github = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [users, setUsers] = useState([]);
  const [tempSearch, setTemlSearch] = useState("it-camasutra");
  // const [] = useState("it-camasutra")

  useEffect (() => {
if(selectedUser) {
  document.title = selectedUser.login;
}
  }, [selectedUser]);

  useEffect(() => {
axios.get(`https://api.github.com/search/users?q=it&per_page=10`).then(responce => setUsers(responce.data.items));
  }, []);

  return (
    <section className={s.container}>
      <div>
        <input onChange={(e) =>{return setTemlSearch(e.target.value)}} placeholder="search..."></input>
        <button onClick={() => {
          axios.get(`https://api.github.com/search/users?q=${tempSearch}&per_page=10`).then(responce => {
            console.log(tempSearch);
            console.log(responce.data.items);
            console.log(users);
            return setUsers(responce.data.items)});
        }}>Find</button>
        <ul>
          {users.map((u) => (
            <li
              key={u.id}
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
