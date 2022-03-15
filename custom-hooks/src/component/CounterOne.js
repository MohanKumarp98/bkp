import React from 'react';
import useCounter from './hooks/useCounter';

function CounterOne() {

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

    let [count,increment,decrement,reset]=useCounter(10,20)

  return <div>
<p>Counter one-{count}</p>
<button onClick={()=>{increment(100)}}>increment</button>
<button onClick={()=>{decrement()}}>decrement</button>
<button onClick={()=>{reset()}}>reset</button>

  </div>;
}

export default CounterOne;
