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
        <Link to="/todoapp">
          Todo App ( Приложение для планирования задач )
        </Link>
        <Link to="/usestate">The game ( Игра ) </Link>
        <Link to="/pokemon">Find the Pakemon ( Найди пакемона ) </Link>
        <Link to="/draganddrop">DragDrop ( Перетаскивание карт мышкой ) </Link>
        <Link to="/smoothscroll">Smooth Scroll whith hooks (Бесконечный скролл на хуках) </Link>
      </nav>
    </header>
  );
};

export default Navigation;

// import { Outlet, Link } from "react-router-dom";

// <Link to="/invoices">Invoices</Link> |{" "}
// <Link to="/expenses">Expenses</Link>
