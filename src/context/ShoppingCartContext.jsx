import { createContext, useState } from "react";
export const CartContext = createContext(null);

import React from "react";

const ShoppingCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const isInCart = (id) => {
    return cart.some((prod) => prod.item.id === id);
  };

  const resetCart = () => {
    setCart([]);
    setTotal(0);
    setTotalItems(0);
  };

  const handleRemoveItem = (id) => {
    const removedItem = cart.find((prod) => prod.item.id === id);
    setTotal(total-(removedItem.item.price*removedItem.quantity));
    setTotalItems(totalItems-(removedItem.quantity));
    setCart(cart.filter((prod) => prod.item.id !== id));
  };

  const handleAddToCart = (product, quantity) => {
    if (isInCart(product.id)) {
      const updatedCart = cart.map((prod) => {
        if (prod.item.id === product.id) {
          return { ...prod, quantity: prod.quantity + quantity };
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
      setTotal(total + product.price*quantity);
      console.log(`Agregaste ${quantity} de ${product.name}`);
    } else {
      console.log(`Agregaste ${quantity} de ${product.name}`);
      const newItem = {
        item: product,
        quantity: quantity,
      };
      setCart([...cart, newItem]);
      setTotal(total + newItem.item.price*newItem.quantity);
    }
    setTotalItems(totalItems+quantity);
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          total,
          setTotal,
          totalItems,
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
