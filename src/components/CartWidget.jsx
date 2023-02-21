import React from "react";

const CartWidget = () => {
  return (
    <>
        <button className="cart">
        <span className="cartCounter">5</span>
        <span className="itemCart material-symbols-outlined">shopping_basket</span>
        </button>
    </>
  );
};

export default CartWidget;
