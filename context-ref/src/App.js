import logo from './logo.svg';
import './App.css';
import ComponentA from './component/ComponentA'
import{UserProvider} from './component/UserContext'
// import{UserProvider} from './component/UserContext'
// import{UserProvider} from './component/UserContext'
import {LoginProvider} from './component/LoginContext'
import {DataProvider} from './component/DataContext'

import { useState } from 'react';
import ComponentD from './component/ComponentD';
import ComponentF from './component/ComponentF';
import ComponentG from './component/ComponentG';
import RefComponent from './component/RefComponent';


function App() {
  const [username,setusername]=useState('mohan')
  const [loginData, setloginData] = useState({

    isLogin:true,
    loggedInUser:"kumar"
  })
  let myData='2222222'
  return (
    <div className="App">
    Context API
    <button onClick={()=>{
      setusername("mohankumar")
    }}>update user name</button>
    <UserProvider value={username}>
    <ComponentA />
    <ComponentG />
    </UserProvider>
    <LoginProvider value={loginData}>
      <ComponentD />
    </LoginProvider>
    
    <DataProvider value={myData}>
      <ComponentF />
    </DataProvider>
    <RefComponent />

<button onClick={()=>{
  myData='222222222222222222222'
  console.log(myData);
}}>update Data</button>
    </div>
  );
}


export default App;
