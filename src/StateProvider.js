import React, { createContext, useReducer, useContext } from "react";

// Prepares Context Layer
export const StateContext = createContext();

// Wrap and provide the context
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// Pull information from the Context Layer
export const useStateValue = () => useContext(StateContext);
