import React from "react";
import s from "./NotificationList.module.css";

const NotificationList = ({ items, onRemove }) => {
  return(
    <div className={s.notifContainer}>
      {items.map(item => (
        <li key={item.id} className={s.notif} onClick={() => onRemove(item.id)}>
          <p>{item.text}</p>
          <button type="button" onClick={() => onRemove(item.id)}>
          &#10006;
          </button>
        </li>
      ))}
    </div>
  );
      }
export default NotificationList;
