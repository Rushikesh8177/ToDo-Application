import React, { createContext, useEffect, useReducer } from 'react'
import {initialState , reducer} from '../Reducer/ToDoReducer'

const ToDoContext = createContext();


const ToDoProvider = ({children}) => {
    const [state , dispatch] = useReducer( reducer , initialState , (init) => {
        try {
        ToDoFormLocal = JSON.parse(localStorage.getItem('todo'));
        return ToDoFormLocal?.todos;
    }catch{
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
