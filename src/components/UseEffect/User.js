import React from 'react';
import s from './User.module.css';

const User = ({activeUser}) => {
  return (
    <div>
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
  </div>
  )
}

export default User
