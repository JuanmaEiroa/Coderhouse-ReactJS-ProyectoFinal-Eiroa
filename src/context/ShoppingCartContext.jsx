import { createContext, useState } from "react";
export const CartContext = createContext(null);

import React from "react";

const ShoppingCartContextProvider = ({ children }) => {
  //LOGICA DE COUNTER
  const [counter, setCounter] = useState(0);

  const upCounter = () => {
    setCounter(counter + 1);
  };

  const downCounter = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  }

    //LOGICA DE CART
  const [cart, setCart] = useState([]);
  
  const handleAddToCart = (quantity) => {
    console.log("Item añadido a carrito");
    return (1+quantity);


  }

  return (
    <>
      <CartContext.Provider
        value={{ cart, setCart, counter, upCounter, downCounter, resetCounter, handleAddToCart }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default ShoppingCartContextProvider;
