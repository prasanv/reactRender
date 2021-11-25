import React from 'react'

export const Child = ({name}) => {
  
  console.log("Child Component Rendered");
  const date = new Date();

  return (
    <div>
      <h2>Child Component</h2>
      <p>Some Content</p>
      <p>Hello! {name} time is {date.getHours()} : {date.getMinutes()} : {date.getSeconds()} </p>
    </div>
  )
}

export const MemoizedChild = React.memo(Child);