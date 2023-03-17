import { createContext, useState } from "react";
export const CartContext = createContext(null);

import React from "react";

const ShoppingCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const resetCart = () => {
    setCart([]);
    console.log("Carrito vacío");
    console.log(cart);
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
    console.log("Producto eliminado");
    console.log(cart);
  };

  const handleAddToCart = (quantity, product) => {
    console.log(`Agregaste ${quantity} de ${product.name}`);
    const newItem = {
      item: product,
      itemcount: quantity,
    };
    setCart([...cart, newItem]);
    console.log(cart);
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          isInCart,
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
