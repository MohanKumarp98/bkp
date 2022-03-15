import React ,{useContext}from 'react';
import { CountContext } from '../context/CountContext';


function ComponentC() {
    const yourContext=useContext(CountContext)
  return <div>
Count in componentC -{yourContext.count}
<button onClick={()=>{
    yourContext.dispatch("increment")
}}>Click</button>
  </div>;
}

export default ComponentC;
