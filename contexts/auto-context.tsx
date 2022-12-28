import React, { createContext, Dispatch, SetStateAction, useState } from "react";

interface AutoContextInterface {
  query: {};
  setQuery: Dispatch<SetStateAction<{}>>
}
export const AutoCtx = createContext<AutoContextInterface|null>(null);

const AutoContext = ({children}:any) => {
  
  const [query, setQuery] = useState({})

  const autoContext: AutoContextInterface = {
    query,
    setQuery
  }
  return (
    <AutoCtx.Provider value={autoContext}>
      {children}
    </AutoCtx.Provider>
  )
}

export default AutoContext