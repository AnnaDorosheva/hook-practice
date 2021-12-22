import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import s from "./User.module.css";

const User = ({ activeUser, setActiveUser }) => {
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    if (seconds <= 0) {
      setActiveUser(null);
    }
  });

  useEffect(() => {
    setSeconds(20);
  }, [activeUser]);

  return (
    <div className={s.userContainer}>
      <h2>User info:</h2>
      {activeUser && (
        <div className={s.user}>
          <Timer seconds={seconds} setSeconds={setSeconds} />
          <img src={activeUser.avatar_url} alt="avatar" width="300" />
          <p>Login: {activeUser.login}</p>
          <p>Name: {activeUser.name}</p>
          <p>Location: {activeUser.location}</p>
          <a href={activeUser.html_url}>URL on github</a>
        </div>
      )}
    </div>
  );
};

export default User;
