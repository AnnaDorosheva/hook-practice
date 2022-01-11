import React, { useEffect, useState, useRef, useContext } from "react";
import s from "./NotificationList.module.css";
import { authenticationContext } from "../contexts/authentication";

const NotificationList = ({ items, onRemove }) => {
    const { authentificated } = useContext(authenticationContext);
    const [isDeleteNotif, setDeletNotif] = useState(false)

    useEffect(() => {
        const interval = setTimeout(() => {
          setDeletNotif(true);
        }, 5000);
        setDeletNotif(false);
        return () => {
          clearInterval(interval);
        };
      }, [authentificated]);

  return(
      <>
      {!isDeleteNotif ? (<div className={s.notifContainer}>
        {items.map(item => (
          <li key={item.id} className={s.notif} >
            <p>{item.text}</p>
            <button type="button" onClick={() => onRemove(item.id)}>
            &#10006;
            </button>
          </li>
        ))}
      </div>) : null}
      </>
  );
      }
export default NotificationList;

{/* <div className={s.notifContainer}>
{items.map(item => (
  <li key={item.id} className={s.notif} ref={notification} >
    <p>{item.text}</p>
    <button type="button" onClick={() => onRemove(item.id)}>
    &#10006;
    </button>
  </li>
))}
</div> */}