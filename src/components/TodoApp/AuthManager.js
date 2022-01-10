import React, { useContext } from "react";
import { authenticationContext } from "../contexts/authentication";
import { notificationContext } from "../contexts/notification";

const AuthManager = () => {
  const { authentificated, logIn, logOut } = useContext(authenticationContext);
  const notif = useContext(notificationContext);
  const logout = () => {
    logOut();
    notif.addMessage("WELCOME!!!!");
  };
  const login = () => {
    logIn();
    notif.addMessage("SEE YOU SOON!");
  };
  return (
    <div>
        {authentificated ? (
          <button onClick={logout}>Log Out</button>
        ) : (
          <button onClick={login}>Log In</button>
        )}
      <p>
        Status: <b>{authentificated ? "Log IN" : "Log OUT"}</b>
      </p>
    </div>
  );
};

export default AuthManager;
