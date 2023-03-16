import { createContext, useState } from "react";
export const CartContext = createContext(null);

import React from "react";

const ShoppingCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    cart.find((item) => item.id === id) ? true : false;
  };

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
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    console.log("Producto agregado al carrito");
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
