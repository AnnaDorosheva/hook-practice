import React from "react";
import { Link } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={s.header}>
      <img
        className={s.logo}
        src="https://cutewallpaper.org/22/garena-free-fire-logo-wallpapers/1208022084.jpg"
        alt="logo"
      />
      <h1>Navigation</h1>
      <nav className={s.nav}>
        <Link to="/useeffect">
          Search GitHub users ( Поиск пользователей GitHub )
        </Link>
        <Link to="/usestate">The game ( Игра ) </Link>
      </nav>
    </header>
  );
};

export default Navigation;

// import { Outlet, Link } from "react-router-dom";

// <Link to="/invoices">Invoices</Link> |{" "}
// <Link to="/expenses">Expenses</Link>
