/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const DataProvider=createContext(
    {}
)
function ContextData({children}) {
    const [status,setStatus]=useState(false);
  return (
    <DataProvider.Provider value={{status,setStatus}}>
       <div>{children}</div>
    </DataProvider.Provider>
  
  )
}

export default ContextData;