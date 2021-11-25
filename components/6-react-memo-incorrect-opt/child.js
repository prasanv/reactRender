import React from 'react'

export const Child = ({name, children}) => {
  
  console.log("Child Component Rendered");

  return (
    <div>
      <h2>Child Component - {name}</h2>
      <p>Some Content</p>
      {children}
    </div>
  )
}

export const MemoizedChild = React.memo(Child);