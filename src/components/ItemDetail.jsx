import React from "react";
import { useState } from "react";

const ItemDetail = () => {
  const [itemCounter, setItemCounter] = useState(0);

  const plusItem = () => {
    setItemCounter(itemCounter + 1);
  };
  const minusItem = () => {
    itemCounter <= 0 ? setItemCounter(itemCounter - 1) : itemCounter;
  };

  return (
    <>
      <Card>
        <CardHeader>Silla de Ruedas</CardHeader>
        <CardBody>
          <img alt="Silla de Ruedas"></img>
          <p>Precio: $2550</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <button onClick={minusItem}>-</button>
          <div className="itemCounter">{itemCounter}</div>
          <button onClick={plusItem}>+</button>
          <br />
          <button>Añadir a carrito</button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ItemDetail;
