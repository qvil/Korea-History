import React from "react";

const store = {
  level: 1
  // setLevel: () => null
};

export const { Provider, Consumer } = React.createContext(store);
