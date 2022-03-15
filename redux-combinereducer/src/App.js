import logo from './logo.svg';
import './App.css';
import { store } from './redux/store';
import Counter from './componentss/Counter';
import { useDispatch, useSelector } from 'react-redux';
import ComponentA from './componentss/ComponentA';
import { login } from './redux/action/action';

function App() {
  const authState=useSelector(state=> state.authReducers)
  const dispatch=useDispatch()
  return (
    <div className="App">
      {authState.isLogin?<><h1>MOHAN</h1><Counter /><hr></hr><ComponentA /><button onClick={()=>{
        dispatch(login(false))
      }}> Logout</button></>:<button onClick={()=>{
        dispatch(login(true))
      }}> Login</button>}
    
    </div>

  );
}

export default App;
