import axios from 'axios';
import React, {useEffect, useState} from 'react';
import s from "./UsersList.module.css";
import LoaderSpinner from '../../LoaderSpinner/LoaderSpinner';


const UsersList = ({selectedUser, setSelectedUser, setActiveUser, searchTerm}) => {
  const [users, setUsers] = useState([]);
  const [isLoader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true)
    if (selectedUser) {
      axios
        .get(`https://api.github.com/users/${selectedUser.login}`)
        .then((responce) => {setActiveUser(responce.data); setLoader(false)});
    }
  }, [selectedUser]);

  useEffect(() => {
    setLoader(true)
    axios
      .get(`https://api.github.com/search/users?q=${searchTerm}&per_page=10`)
      .then((responce) => {setUsers(responce.data.items); setLoader(false)});
  }, [searchTerm]);

  return (
    <>
    {isLoader ? <LoaderSpinner /> : null}
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
        </>
  )
};

export default UsersList;