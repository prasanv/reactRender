import React,  { memo, useContext } from 'react'
import {counterContext} from '../12-usecontext-opt/contextParent'

export const ContextChildA = () => {

  console.log('Context Child A Component');

  return (
    <div style={{border: "1px solid", padding: "5px"}}>
      <h3>Context Child A Component</h3>
      <ContextChildB></ContextChildB>
    </div>
  )
}

export const MemoizedContextChildA = React.memo(ContextChildA);

export const ContextChildB = () => {

  console.log('Context Child B Component');

  return (
    <div style={{border: "1px solid", padding: "5px"}}>
      <h3>Context Child B Component</h3>
      <ContextChildC></ContextChildC>
    </div>
  )
}


export const ContextChildC = () => {
  
  const counterValue = useContext(counterContext);
  console.log('Context Child C Component');

  return (
    <div style={{border: "1px solid", padding: "5px"}}>
      <h3>Context Child C Component - {counterValue}</h3>
      <ContextChildD></ContextChildD>
    </div>
  )
}


export const ContextChildD = () => {

  console.log('Context Child D Component');

  return (
    <div style={{border: "1px solid", padding: "5px"}}>
      <h3>Context Child D Component</h3>
    </div>
  )
}