import { useState } from "react";
import { CounterContext } from "./counterContext";

import React from "react";

const StateComponent = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const upCounter = () => {
    setCounter(counter + 1);
  };

  const downCounter= () => {
    setCounter(counter - 1);
  };

  return (
  <CounterContext.Provider value={{ counter, upCounter, downCounter }}>
    {children}
  </CounterContext.Provider>);
};

export default StateComponent;
