import React, {useState} from 'react'

const ParentOne = ({children}) => {

  const [counter, setCounter] = useState(0)
  
  console.log("ParentOne Component Rendered");
  
  return (
    <>
    <div>
      <h2>ParentOne Component with Child Component as a Prop</h2>
      <p>Counter = {counter}</p>
      <button onClick={()=> setCounter(old=>old+1)}>Increment</button>    
      <button onClick={()=> setCounter(0)}>set to 0</button>    
      <button onClick={()=> setCounter(5)}>set to 5</button>    
    </div>
    <div>
      {children}
    </div>
    </>
  )
}

export default ParentOne
