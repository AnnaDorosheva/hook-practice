import React from "react";
import s from "./UseStateGame.module.css";


const UseStateGame = () => {


  const [players, setCounter] = React.useState({
    player1: 6,
    player2: 10,
  });

  const player1Plas = () => {
    setCounter((players) => {
      return {
      ...players,
      player1: players.player1 + 1,
    }});
  };
  const player2Plas = () => {
    setCounter((players) => {
      return{
      ...players,
      player2: players.player2 + 1,
    }});
  };

  return (
    <div className={s.game}>
      <h2 className={s.gameName}>GAME</h2>
      <hr />
      <div>
        <h3>Ivan</h3>
        <div>{players.player1}</div>
        <button
          onClick={player1Plas}
        >
          +
        </button>
      </div>
      <hr />
      <div>
        <h3>Gena</h3>
        <div>{players.player2}</div>
        <button
          onClick={player2Plas}
        >
          +
        </button>
      </div>
      <hr />
      <button
        onClick={() => {
          setCounter((players) => ({
            ...players,
            player1: players.player1 - 1,
            player2: players.player2 - 1,
          }));
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCounter((players) => ({
            ...players,
            player1: 8,
            player2: 8,
          }));
        }}
      >
        RESET
      </button>
    </div>
  );
};

export default UseStateGame;
