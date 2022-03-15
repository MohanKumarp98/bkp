import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset,login } from '../redux/action/action';

function Counter() {
const state=useSelector(state=>state.countReducer)
const dispatch=useDispatch()


useEffect(() => {
    if(state!==0){
        console.log(state);
    }
}, [state]);



  return <div>
      <p>count-{state.count}</p>
      <button onClick={()=>{dispatch(increment())}}>increment</button>
      <button onClick={()=>{dispatch(decrement())}}>decrement</button>
      <button onClick={()=>{dispatch(reset())}}>reset</button>
  </div>;
}

export default Counter;
