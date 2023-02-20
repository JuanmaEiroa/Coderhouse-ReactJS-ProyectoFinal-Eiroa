import React from "react";
import { useState } from "react";

const ItemCount = () => {
  const [itemCounter, setItemCounter] = useState(0);

  const plusItem = () => {
    setItemCounter(itemCounter + 1);
  };

  const minusItem = () => {
    itemCounter <= 0 ? setItemCounter(itemCounter - 1) : itemCounter;
  };

  return (
    <>
      <button onClick={minusItem}>-</button>
      <div className="itemCounter">{itemCounter}</div>
      <button onClick={plusItem}>+</button>
    </>
  );
};

export default ItemCount;
