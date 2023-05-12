import React, { createContext, useContext } from 'react'

export const Context = createContext()


export const ContextProvider= ({children}) => {

  return (
    <Context.Provider value={{}}>
    {children}
    </Context.Provider>
  )
}

export const ContextState=()=>{
  return useContext(Context)
}
