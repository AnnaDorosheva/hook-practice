import axios from "axios";
import React, {useState, useEffect} from "react";
import s from "./UseEffect.module.css";

// const api = "https://api.github.com/search/users?q=it";

const Github = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [activeUser, setActiveUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [tempSearch, setTemlSearch] = useState("it-kamasutra");
  const [searchTerm, setSearchTerm] = useState("it-kamasutra")

  useEffect (() => {
if(selectedUser) {
  document.title = selectedUser.login;
}
  }, [selectedUser]);

  useEffect(() => {
    axios.get(`https://api.github.com/search/users?q=${searchTerm}&per_page=10`).then(responce => setUsers(responce.data.items));
  }, [searchTerm]);

  useEffect(() => {
    if(selectedUser) {
      axios.get(`https://api.github.com/users/${selectedUser.login}`).then(responce => setActiveUser(responce.data));
    }
  }, [selectedUser]);

  return (
    <section className={s.container}>
      <div>
        <input onChange={(e) =>{return setTemlSearch(e.target.value)}} placeholder="search..."></input>
        <button onClick={() => setSearchTerm(tempSearch)}>Find</button>
        <ul className={s.usersNames}>
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
        {activeUser && <div>
          <img src={activeUser.avatar_url} alt="avatar" width="300" />
        <p>Login: {activeUser.login}</p>
        <p>Name: {activeUser.name}</p>
        <p>Location: {activeUser.location}</p>
        <a href={activeUser.url}>URL on github</a>
        </div>}
      </div>
    </section>
  );
};

export default Github;
