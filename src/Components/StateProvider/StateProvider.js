import React from 'react'
import { useContext, useReducer, createContext } from 'react'


export const StateContext = createContext()

//context is used for sharing data within children of the components
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//use for pulling data, use the context
export const useStateValue = () => useContext(StateContext)