import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const CartWidget = () => {

  const {totalItems} = useContext(CartContext);

  return (
    <>
        <button className="cart">
        <span className="cartCounter">{totalItems}</span>
        <span className="itemCart material-symbols-outlined">shopping_basket</span>
        </button>
    </>
  );
};

export default CartWidget;
