import logo from './logo.svg';
import './App.css';
import React ,{useReducer} from 'react';
import MyCounter from './components/MyCounter';
import MyCounter2 from './components/Mycounter2';
import PostList from './components/PostList';
import { CountContext } from './context/CountContext';
import ComponentA from './components/ComponentA';


const intialState=0
const reducer=(state,action)=>{
  console.log(state,"state");
  console.log(action,"action");

  if(action==="increment")
  {
    console.log("aa");
    return state+10
  }else if(action==="decrement")
  {
    return state-10;
  }else if(action==="reset")
{
  return intialState;
}
return state
}

function App() {

const [state, dispatch] = useReducer(reducer, intialState);


  return (<>
  <CountContext.Provider value={{
    count:state,
    dispatch:dispatch
  }}>
    <div className="App">
     {/* <p>state-{state}</p>
     <button onClick={()=>{dispatch("increment")}}>increment</button>
     
      <button onClick={()=>{dispatch("decrement")}}>decrement</button>
    
      <button onClick={()=>{dispatch("reset")}}>reset</button>
    
    <hr></hr> */}

    {/* <MyCounter /> */}
    {/* <MyCounter2 /> */}
    {/* <PostList /> */}
    <ComponentA />
    </div>
    </CountContext.Provider>
    </>
  );
}

export default App;
