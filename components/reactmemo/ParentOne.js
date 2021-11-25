import React, {useState} from 'react'
import { MemoizedChildOne } from "../reactmemo/ChildOne";

const ParentOne = () => {

  const [counter, setCounter] = useState(0)
  const [name, setName] = useState("prasan")
  
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
      <button  onClick={()=> setName("Prasan Venkat")}>Change Child Comp Name</button>
      <MemoizedChildOne name={name}></MemoizedChildOne>      
    </div>
    </>
  )
}

export default ParentOne
