import React, { createContext, useEffect, useReducer } from 'react'
import {initialState , reducer} from '../Reducers/ToDoReducer.js'

const ToDoContext = createContext();


const ToDoProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState, (init) => {
  try {
    const ToDoFormLocal = JSON.parse(localStorage.getItem('todo'));
    return ToDoFormLocal ? ToDoFormLocal : init;
  } catch {
    return init;
  }
});
    useEffect(() =>{
        localStorage.setItem('todo', JSON.stringify(state));
    },[state]);

  return (
    <ToDoContext.Provider value={{state ,dispatch}}>
        {children}
    </ToDoContext.Provider>
  )
}

export { ToDoContext , ToDoProvider };
