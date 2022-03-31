import React from 'react';
import s from "./Trello.module.css";

const Trello = () => {
    const [boards, setBoards] = React.useState([])
  return (
    <section className={s.trello}>
        <div className={s.board}>
            <h2>Сделать</h2>
        </div>
        <div className={s.board}>
            <h2>В процессе</h2>
        </div>
        <div className={s.board}>
            <h2>Сделано</h2>
        </div>
    </section>
  )
}

export default Trello