import React, { useEffect } from "react";
import s from "./Timer.module.css";

const Timer = ({seconds, setSeconds}) => {

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSec) => prevSec - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className={s.timer}>Timer: {seconds} sec</div>;
};

export default Timer;
