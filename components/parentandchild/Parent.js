import React, {useState} from 'react'
import Child from '../../components/parentandchild/Child'

const Parent = () => {

  const [counter, setCounter] = useState(0)
  
  console.log("Parent Component Rendered");

  return (
    <>
    <div>
      <h2>Parent Component with direct Child Component</h2>
      <p>Counter = {counter}</p>
      <button onClick={()=> setCounter(old=>old+1)}>Increment</button>    
      <button onClick={()=> setCounter(0)}>set to 0</button>    
      <button onClick={()=> setCounter(5)}>set to 5</button>    
    </div>
    <div>
      <Child></Child>      
    </div>
    </>
  )
}

export default Parent
