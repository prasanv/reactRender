import React from 'react'
import ContextParent from '../components/13-usecontext-opt/contextParent'
import { MemoizedContextChildA } from "../components/13-usecontext-opt/contextChild";

const Usecontext = () => {
  return (
    <div>
      <ContextParent>
        <MemoizedContextChildA></MemoizedContextChildA>
      </ContextParent>      
    </div>
  )
}

export default Usecontext
