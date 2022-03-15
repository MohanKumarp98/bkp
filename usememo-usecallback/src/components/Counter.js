import React from 'react';

function Counter() {

    incrementCountOne=()=>{
        setcounterOne(counterOne+1)
    }
    incrementCountTwo=()=>{
        set
        setcounterTwo(incrementCountTwo+1)
    }

    // the callback function should get excecuted only whenn the dependency ic 
    // changed else it should return the memorized value i.e.., (latest obtained result)

const isEven=useMemo(()=>{
console.log(" is even function");
for (let i = 0; i < 100000; i++) {
    
    
}
return counterTwo%2===0
},[counterTwo])

  return <div>
<div>Counter One -{counterOne}</div>
<div>Counter Two -{counterTwo}</div>
<span>{isEven?"even":"odd"}</span>
<button onClick={incrementCountOne}>Increment one</button>
<button onClick={incrementCountTwo}>Increment Two</button>
  </div>;
}

export default Counter;
