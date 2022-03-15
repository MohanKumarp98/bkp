import React,{useState} from 'react';

const useCounter=(intialval,val)=> {
     const [count, Setcount] = useState(intialval)

    const increment=(values=0)=>{
        Setcount(count+val+values)
    }
    const decrement=(values=0)=>{
        Setcount(count-val-values)
    }
    const reset=()=>{
        Setcount(intialval)
    }
  return [count,increment,decrement,reset]
}

export default useCounter;


/// npm run build to deploy