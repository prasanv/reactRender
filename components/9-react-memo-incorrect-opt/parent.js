import React, {useState} from 'react'
import {MemoizedChild} from "../9-react-memo-incorrect-opt/child";


const Parent = () => {

  const [counter, setCounter] = useState(0)
  const [name, setName] = useState("prasan")
  
  console.log("Parent Component Rendered");

  // function - nullify's react memo 
  const handleClick = () => {
    console.log("handleClick is called")
  }

  // non-state object - nullify's react memo 
  const person = {
    firstName: "Krishna",
    lastName: "Vasudeva",
  }
  
  return (
    <>
    <div>
      <h2>ParentOne Component with Child Component as a Prop</h2>
      <p>Despite using React Memo, Child Comp will rerender when changing the counter on Parent Comp because function/non-state prop is passed into the Child Comp as a prop</p>
      <p>This happens because every time the page renders the function/non-state prop inside the Parent Comp gets initialized</p>
      <p>Counter = {counter}</p>
      <button onClick={()=> setCounter(old=>old+1)}>Increment</button>    
      <button onClick={()=> setCounter(0)}>set to 0</button>    
      <button onClick={()=> setCounter(5)}>set to 5</button>    
    </div>
    <div>
      <button  onClick={()=> setName("Prasan Venkat")}>Change Child Comp Name</button>
      <MemoizedChild name={name} handleClick={handleClick} person={person}> </MemoizedChild>      
    </div>
    </>
  )
}

export default Parent
