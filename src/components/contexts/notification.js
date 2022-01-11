import React, { createContext, useState } from "react";
import shortid from "shortid";
import NotificationList from "../TodoApp/NotificationList";

export const notificationContext = createContext();

const NotificationProvider = (props) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    const message = {
      id: shortid.generate(),
      text,
    };
    setMessages((prevMes) => [...prevMes, message]);
  };

  const deleteMessage = (id) => {
    setMessages(prevMes => prevMes.filter(mes => mes.id !== id));
  };

//   const disappearedMessage = (id) => {
// setInterval(() => {
//     setMessages(prevMes => prevMes.filter(mes => mes.id !== id));
// }, 3000);
//   };

  return (
    <notificationContext.Provider value={{ addMessage }}>
      {props.children}
      {messages.length > 0 && (
          <NotificationList items={messages} onRemove={deleteMessage} />
      )}
    </notificationContext.Provider>
  );
};

export default NotificationProvider;
