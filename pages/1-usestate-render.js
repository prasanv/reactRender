// 1-usestate-render
import React, {useState} from 'react'

const UseStateRender = () => {

  const [counter, setCounter] = useState(0)
  
  console.log("useState Rendered primitive data type");

  return (
    <div>
      <p>Counter = {counter}</p>
      <button onClick={()=> setCounter(old=>old+1)}>Increment</button>    
      <button onClick={()=> setCounter(0)}>set to 0</button>    
      <button onClick={()=> setCounter(5)}>set to 5</button>    
    </div>
  )
}

export default UseStateRender;