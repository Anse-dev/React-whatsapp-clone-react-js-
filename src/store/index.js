import { createContext, useContext, useReducer } from "react";
import { Switch } from "react-router";

const initialState = {
  friends: [],
  messages: [],
  me: null,
};
const StateContext = createContext(initialState);

const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
const stateValue = () => useContext(StateContext);

export { initialState, StateContext, stateValue };
