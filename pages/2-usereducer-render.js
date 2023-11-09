// 2-usereducer-render
import React, {useReducer} from 'react'

const initialObj = {
  initialValue: 0
}

const reducer = (currentState, action) => {
  switch(action.type){
    case 'increment':
      return {...currentState, initialValue: currentState.initialValue + 1 }
    case 'decrement':
      return {...currentState, initialValue: currentState.initialValue - 1 }
    case 'reset':
        return initialObj
  }
}

const UseReducerRender = () => {

  const [counterState, dispatch] = useReducer(reducer, initialObj);
  console.log("useReducer Rendered");

  return (
    <div>
      <p>Counter = {counterState.initialValue}</p>
      <button onClick={()=> {dispatch({type: 'increment'})}}>Increment</button>
      <button onClick={()=> {dispatch({type: 'decrement'})}}>Decrement</button>
      <button onClick={()=> {dispatch({type: 'reset'})}}>Reset</button>
    </div>
  )
}

export default UseReducerRender
