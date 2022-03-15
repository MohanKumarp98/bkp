import logo from './logo.svg';
import './App.css';
import { store } from './store/store';
import { useDispatch, useSelector } from 'react-redux';
import { decrementNum, incrementNum } from './actions/action';

function App() {
  const countState=useSelector(state=>state.changeTheNumber)
  const dipatch=useDispatch()
  let handleIncrease=()=>{
    dipatch(incrementNum(10))
  }
  let handleDecrease=()=>{
    dipatch(decrementNum(5))
  }
  return (
    <div className="App">
     {/* <h1>welcome to redux </h1> */}
     <h1>counter--{countState}</h1>
     <button onClick={handleIncrease}>increment</button>
     <button onClick={handleDecrease}>decrement</button>
    </div>
  );
}

export default App;
