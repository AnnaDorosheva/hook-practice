import React from "react";
import s from "./DragDrop.module.css";


const DragDrop = () => {
  const [cardList, setCardList] = React.useState([
    { id: 1, order: 3, text: "KARD 3" },
    { id: 2, order: 1, text: "KARD 1" },
    { id: 3, order: 2, text: "KARD 2" },
    { id: 4, order: 4, text: "KARD 4" },
    { id: 5, order: 5, text: "KARD 5" },
  ]);

  const [currentCard, setCurrentCard] = React.useState(null);

  function dragStartHandler(e, card) {
    console.log("drag", card);
    setCurrentCard(card);
  };
  function dragEndHandler(e) {
    e.target.style.background = "rgb(216 232 247)";
  };
  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = "lightgray";
  };

  function dropHandler(e, card) {
    e.preventDefault();
   setCardList(cardList.map(c => {
    if(c.id === card.id) {
return {...c, order: currentCard.order};
   }
  if(c.id === currentCard.id) {
    return {...c, order: card.order};
  }
  return c;
  }))
  e.target.style.background = "white";
  };

  const sortCards = (a, b) => {
if(a.order > b.order) {
  return 1;
} else {
  return -1;
}
  };

  return (
    <section>
      <h2>DRAG&DROP (перетаскивание компонентов мышью)</h2>
    <div className={s.container}>
      {cardList.sort(sortCards).map((card) => (
        <div
          key={card.id}
          className={s.card}
          draggable={true}
          onDragStart={(e) => dragStartHandler(e, card)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, card)}
        >
          {card.text}
        </div>
      ))}
    </div>
    </section>
  );
};

export default DragDrop;
