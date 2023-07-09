import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer.jsx';

export const initialState = {
  asteroids: [],
  asteroidsWithDates: {},
  error: '',
  alphabeticalOrder: ''
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
