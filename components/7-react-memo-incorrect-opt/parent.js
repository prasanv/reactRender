import React, {useState} from 'react'
import {MemoizedChild} from "../7-react-memo-incorrect-opt/child";


const Parent = () => {

  const [counter, setCounter] = useState(0)
  const [name, setName] = useState("prasan")
  
  console.log("Parent Component Rendered");
  
  return (
    <>
    <div>
      <h2>ParentOne Component with Child Component as a Prop</h2>
      <p>Despite using React Memo, Child Comp will rerender when changing the counter because of children(i.e.HTML tag) passed into the Child Comp</p>
      <p>Counter = {counter}</p>
      <button onClick={()=> setCounter(old=>old+1)}>Increment</button>    
      <button onClick={()=> setCounter(0)}>set to 0</button>    
      <button onClick={()=> setCounter(5)}>set to 5</button>    
    </div>
    <div>
      <button  onClick={()=> setName("Prasan Venkat")}>Change Child Comp Name</button>
      <MemoizedChild name={name}>
        {/* Hello! as simple string does not cause re-render */}
        <strong>Hello! as string HTML tag  does cause re-render</strong>
      </MemoizedChild>      
    </div>
    </>
  )
}

export default Parent
