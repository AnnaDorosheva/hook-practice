import axios from "axios";
import React, { useEffect, useState } from "react";
import s from "./UsersList.module.css";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";

const UsersList = ({
  selectedUser,
  setSelectedUser,
  setActiveUser,
  searchTerm,
}) => {
  const [users, setUsers] = useState([]);
  const [isLoader, setLoader] = useState(false);
  const [page, setPage] = useState(1);

  // Render Selected User
  useEffect(() => {
    setLoader(true);
    if (selectedUser) {
      axios
        .get(`https://api.github.com/users/${selectedUser.login}`)
        .then((responce) => {
          setActiveUser(responce.data);
          setLoader(false);
        });
    }
  }, [selectedUser]);

  // Render users
  useEffect(() => {
    setLoader(true);
    axios
      .get(
        `https://api.github.com/search/users?q=${searchTerm}&per_page=10&page=${page}`
      )
      .then((responce) => {
        setUsers(responce.data.items);
        setLoader(false);
      });
  }, [searchTerm, page]);

  const nextUsersPage = () => {
    setPage(page + 1);
  };

  const prevUsersPage = () => {
    setPage((prevPage) => {
      if (prevPage <= 2) {
        return 1;
      } else {
        return prevPage - 1;
      }
    });
  };

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

      <button type="button" onClick={prevUsersPage} disabled={page <= 1}>
        Prev page
      </button>
      <button type="button" onClick={nextUsersPage}>
        Next page
      </button>
    </>
  );
};

export default UsersList;
