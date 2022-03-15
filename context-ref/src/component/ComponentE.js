import React,{useEffect} from 'react';
import { useContext } from 'react/cjs/react.development';
// import ComponentF from './ComponentF';
import LoginContext from './LoginContext'

function ComponentE() {
    let logInData=useContext(LoginContext)
    useEffect(() => {
      console.log('loginData',logInData);;
    
    }, []);
    
  return <div>
      ComponentE -{logInData.loggedInUser}
  </div>;
}

export default ComponentE;
