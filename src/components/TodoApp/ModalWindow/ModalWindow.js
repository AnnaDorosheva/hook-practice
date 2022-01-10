import React, { useRef, useEffect } from "react";
import s from "./ModalWindow.module.css";


const ModalWindow = ({ onClose }) => {
  const blackdropRef = useRef(null);
  const keyDownHandler = (e) => {
    if (e.code !== "Escape") {
      return;
    };
    onClose();
  };

  const handleBlackdropClouse = (e) => {
      if(e.target !== blackdropRef.current) {
        return;
      };
      onClose();
  };
  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("onClik", handleBlackdropClouse);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("onClik", handleBlackdropClouse);
    };
  }, []);

  return (
    <section className={s.blackdrop} ref={blackdropRef} onClick={handleBlackdropClouse}>
      <div className={s.content}>
        <h2>Modal Window</h2>
        <p>MODAL WINDOW HERE</p>
        <button onClick={onClose} type="button">
          Close
        </button>
      </div>
    </section>
  );
};

export default ModalWindow;
