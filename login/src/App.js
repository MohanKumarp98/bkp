// import logo from './logo.svg';
import './App.css';
// import Home from './component/Home'
import Login from './component/Login'
import NavBar from './component/NavBar';
// import Register from './component/Register'
// import { BrowserRouter as Router,Link,Route } from 'react-router-dom'
// import UserTable from './component/UserTable';
// import { useState } from 'react';
// import Pagination from './component/Pagination';
// import Validation from './component/Validation';
// import Localstorage from './component/Localstorage';



function App() {

//   const personDetails = {
//     name: "",
//     age: "",
//     mobile: "",
//     email: "",
//     gender: "",
//     password: "",
//     confirmpassword: "",
//     dateofbirth: ""
// }
// const [correctDeatil, setcorrectDeatil] = useState(personDetails)
// const [sampleDeatil, setsampleDeatil] = useState(personDetails)
// const [final, setfinal] = useState([])
// const [error, seterror] = useState({
//     nameErr: "",
//     emailErr:"",
//     mobileErr:'',
//     ageErr:"",
//     passErr:"",
//     cpassErr:"",
//     genderErr:"",
//     pushErr:''
// })
// console.log(error)
  return (
    // <Pagination />
    <>
    <NavBar />
    <Login />
    </>
//     // <Router>
//     {/* <div className="App" style={{display:"flex",justifyContent:"space-between"}}>
//       <div>
//       </div>
//       <div className="links" style={{position:"absolute", right:"10px"}}>
//       <Link className='link' to='/home' >Home</Link>
//       <Link className='link' to='/login' >Login</Link>
//       <Link className='link' to='/register' >Register</Link>
//       <Link className='link' to='/usertable' >User Table</Link>
//       {/* <Link className='link' to='/localstorage' >LocalStorage</Link> */}
//       // </div>
//       // <div style={{position:"absolute", top:"80px",margin:"auto"}}>
//       //   <Route path="/home" render={(props)=>{return <Home/> }}></Route>
//       //   <Route path="/login" render={(props)=>{return <Login/> }}></Route>
//       //   <Route path="/register" render={(props)=>{return <Register {...props} correctDeatil={correctDeatil} setcorrectDeatil={setcorrectDeatil} 
//       //   sampleDeatil={sampleDeatil} setsampleDeatil={setsampleDeatil} 
//       //   final={final} setfinal={setfinal} error={error} seterror={seterror} /> }}></Route>
//       //   <Route path="/usertable" render={(props)=>{return <UserTable data={final} /> }}></Route>
//       //   <Pagination/> */}
//        // {/* <Route path="/localstorage" render={(props)=>{return <Localstorage data={final} /> }}></Route> */}
// //{/* </div> */}
//     // </div>
//     // </Router>
  );
}

export default App;
