import React, { useState } from 'react'
import { MemoizedContextChildA } from "../12-usecontext-opt/contextChild";

export const counterContext = React.createContext();
const ContextProvider = counterContext.Provider;

const ContextParent = () => {

  const [counter, setCounter] = useState(0)

  console.log('Context Parent Component');

  return (
    <div style={{border: "1px solid", margin:"5px", padding: "5px"}}>
      <div style={{margin:"5px", padding: "5px"}}>
        <h2>Context Parent Component</h2>
        <p>Counter = {counter}</p>
        <button onClick={()=> setCounter(old=>old+1)}>Increment</button>    
        <button onClick={()=> setCounter(0)}>set to 0</button>    
        <button onClick={()=> setCounter(5)}>set to 5</button>    
      </div>
      <div>
        <ContextProvider value={counter}>
          <MemoizedContextChildA></MemoizedContextChildA>
        </ContextProvider>
      </div>
    </div>
  )
}

export default ContextParent