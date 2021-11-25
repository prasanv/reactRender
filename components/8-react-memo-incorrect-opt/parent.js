import React, {useState} from 'react'
import {MemoizedChild} from "../8-react-memo-incorrect-opt/child";


const Parent = () => {

  const [counter, setCounter] = useState(0)
  const [name, setName] = useState("prasan")
  
  console.log("Parent Component Rendered");
  
  return (
    <>
    <div>
      <h2>ParentOne Component with Child Component as a Prop</h2>
      <p>Using React Memo, while using dynamic value inside Child Component</p>
      <p>Counter = {counter}</p>
      <button onClick={()=> setCounter(old=>old+1)}>Increment</button>    
      <button onClick={()=> setCounter(0)}>set to 0</button>    
      <button onClick={()=> setCounter(5)}>set to 5</button>    
    </div>
    <div>
      <button  onClick={()=> setName("Prasan Venkat")}>Change Child Comp Name</button>
      <MemoizedChild name={name}>
      </MemoizedChild>      
    </div>
    </>
  )
}

export default Parent
