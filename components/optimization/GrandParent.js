import React, {useState} from 'react'
import ParentOne from '../optimization/ParentOne'
import ChildOne from '../optimization/ChildOne'

const GrandParent = () => {

  const [counter, setCounter] = useState(0)
  
  console.log("Grand Parent Component Rendered");
  
  return (
    <>
    <div>
      <h2>Grand Parent Component with Direct Parent and Child Component</h2>
      <p>Grand Parent Counter = {counter}</p>
      <button onClick={()=> setCounter(old=>old+1)}>Increment</button>    
      <button onClick={()=> setCounter(0)}>set to 0</button>    
      <button onClick={()=> setCounter(5)}>set to 5</button>    
    </div>
    <div>
      <ParentOne>
          <ChildOne></ChildOne>
      </ParentOne>
    </div>
    </>
  )
}

export default GrandParent;