import React from "react";

const CartWidget = () => {
  return (
    <>
        <button className="cart">
        <span className="itemCounter">5</span>
        <span className="itemCart material-symbols-outlined">shopping_basket</span>
        </button>
    </>
  );
};

export default CartWidget;
