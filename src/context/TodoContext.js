import React, { createContext, useContext, useReducer } from "react";

const TodoLayerContext = createContext();

const TodoLayer = ({initialState, reducer, children}) => (
    <TodoLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </TodoLayerContext.Provider>
)

const useTodoLayerValue = () => useContext(TodoLayerContext)

export { TodoLayerContext, TodoLayer, useTodoLayerValue };