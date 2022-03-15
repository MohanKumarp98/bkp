import React from 'react';
import { useRef,useEffect } from 'react';


function RefComponent() {

const inputRef=useRef()
const passRef=useRef()
useEffect(() => {
  console.log('inputRef',inputRef);
  console.log('inputRef',inputRef.current);
  inputRef.current.focus()
}, []);



  return <div>
      <input ref={inputRef} type='text' placeholder='enter your name'></input>
      <input  type='password' placeholder='enter your password'></input>
      <button onClick={()=>{passRef.current.focus()}} >click to view the focus or ref method</button>
  </div>;
}

export default RefComponent;
