import React from 'react'

export const Child = ({name, handleClick, person}) => {
  
  console.log("Child Component Rendered");

  return (
    <div>
      <h2>Child Component - {name}</h2>
      <p>Some Content</p>
      <p>Hello! {person.firstName} {person.lastName} </p>
      <button onClick={()=> handleClick()}>Click Me</button>
    </div>
  )
}

export const MemoizedChild = React.memo(Child);