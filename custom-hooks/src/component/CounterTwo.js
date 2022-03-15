import React from 'react';
import useCounter from './hooks/useCounter';

function CounterTwo() {
 // const [count, Setcount] = useState(initialState)

    // const increment=()=>{
    //     Setcount(count+1)
    // }
    // const decrement=()=>{
    //     Setcount(count-1)
    // }
    // const reset=()=>{
    //     Setcount(0)
    // }

    let [count,increment,decrement,reset]=useCounter(0,50)

  return <div>
<p>Counter Two-{count}</p>
<button onClick={()=>{increment()}}>increment</button>
<button onClick={()=>{decrement(70)}}>decrement</button>
<button onClick={()=>{reset()}}>reset</button>
  </div>;
}

export default CounterTwo;

