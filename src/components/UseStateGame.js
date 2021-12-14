import React from 'react';
import s from "./UseStateGame.module.css";

const UseStateGame = () => {
  const [plaer1Counter, setPlaer1Counter] = React.useState(0);
  const [plaer2Counter, setPlaer2Counter] = React.useState(0);
  return (
    <div className={s.game}>
      <div>
        <h2>Ivan</h2>
        <div>{plaer1Counter}</div>
        <button onClick={() => {
          setPlaer1Counter(plaer1Counter + 1)
        }}></button>
      </div>

      <div>
        <h2>Gena</h2>
        <div>{plaer2Counter}</div>
        <button onClick={() => {
          setPlaer2Counter(plaer2Counter + 1)
        }}></button>
      </div>
      
    </div>
  )
};

export default UseStateGame;
