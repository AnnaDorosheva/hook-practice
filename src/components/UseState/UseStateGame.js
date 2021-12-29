import React from "react";
import s from "./UseStateGame.module.css";

const UseStateGame = () => {
  // const [plaer1Counter, setPlaer1Counter] = React.useState(10);
  // const [plaer2Counter, setPlaer2Counter] = React.useState(10);

  const [players, setCounter] = React.useState({
    player1: 6,
    player2: 10,
  });
  return (
    <div className={s.game}>
      <h2 className={s.gameName}>GAME</h2>
      <hr />
      <div>
        <h3>Ivan</h3>
        <div>{players.player1}</div>
        <button
          onClick={() => {
            setCounter((players) => {
              return {
              ...players,
              player1: players.player1 + 1,
            }});
          }}
        >
          +
        </button>
      </div>
      <hr />
      <div>
        <h3>Gena</h3>
        <div>{players.player2}</div>
        <button
          onClick={() => {
            setCounter((players) => {
              return{
              ...players,
              player2: players.player2 + 1,
            }});
          }}
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
