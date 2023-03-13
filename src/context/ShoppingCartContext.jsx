import { createContext, useState } from "react";

export const CartContext = createContext(null);

import React from "react";

const ShoppingCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <CartContext.Provider value={{cart, setCart}}>{children}</CartContext.Provider>
    </>
  );
};

export default ShoppingCartContextProvider;
