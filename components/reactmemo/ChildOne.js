import React from 'react'

export const ChildOne = ({name}) => {
  
  console.log("ChildOne Component Rendered");

  return (
    <div>
      <h2>Child Component - {name}</h2>
      <p>Some Content</p>
    </div>
  )
}

export const MemoizedChildOne = React.memo(ChildOne);