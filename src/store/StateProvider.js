import { createContext, useContext, useReducer } from "react";
import { initialState } from "./reducers";

export const StateContext = createContext(initialState);

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
