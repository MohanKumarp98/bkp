import React, { useEffect,useState } from 'react';

function UseEffectDonts() {
const [count,setcount]=useState(0);
const [age,setage]=useState(0);
const [person,setperson]=useState({fname:"mohan",age:10});

// Dont update the state which is passed as dependency in the same useEffect

// useEffect(()=>{
//     if(count!==0){
//         console.log("count",count);
//         setcount(count+1)
//     }
// },[count])

// useEffect(()=>{
//     if(count!==0){
//         console.log("count",count);
//         setage(age+1)
//     }
// },[age])

// useEffect(()=>{
//     if(person.age!==10){
    // const p={...person}
    // person.age=20
    // console.log("count",count);
//         setage(p)
//     }
// },[person])

const updateCount=()=>{
    //dont access the state as soon as the state is updated updation to state
    //is asynchronous, we will not get the updated state in the next line after updating state

    // console.log("count before ",count)
    // setcount(20)
    // if(count===20)
    // {
    //     console.log("count is 20");
    // }

}
const updateAge=()=>{
    //dont access the state as soon as the state is updated updation to state
    //is asynchronous, we will not get the updated state in the next line after updating state

    // console.log("count before ",count)
    setage(20)
    // if(count===20)
    // {
    //     console.log("count is 20");
    // }

}
const updatePerson=()=>{
    setperson({
        fname:"kumar",
        age:80
    })
}


  return <div>
      <p>count:{count}</p>
      <button onClick={()=>{updateCount()}}>add count</button>
      <hr></hr>
      <p>AGE:{age}</p>
      <button onClick={()=>{updateAge()}}>add age</button>
      <hr></hr>
      <p>person AGE:{person.age}</p>
      <button onClick={()=>{updatePerson()}}>update Age</button>
      {/* <hr></hr> */}

  </div>;
}

export default UseEffectDonts;
