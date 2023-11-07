import React, { useContext, createContext, useReducer } from "react";

//Data layer
export const StateContext = createContext();

//bulid a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
