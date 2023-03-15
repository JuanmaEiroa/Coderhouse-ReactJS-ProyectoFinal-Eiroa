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
  };

  //LOGICA DE CART
  const [cart, setCart] = useState([]);

  const resetCart = () => {
    setCart([]);
    console.log("Carrito vacío");
    console.log(cart);
  };

  const handleRemoveItem = () => {
    setCart(cart.filter((item) => item.id === id));
    console.log("Producto eliminado");
    console.log(cart);
  };

  const handleAddToCart = (item) => {
    setCart((cart) => [...cart, item]);
    console.log("Producto agregado al carrito");
    console.log(cart);
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          counter,
          upCounter,
          downCounter,
          resetCounter,
          resetCart,
          handleAddToCart,
          handleRemoveItem,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default ShoppingCartContextProvider;
