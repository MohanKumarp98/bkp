import React from 'react'
import { useState } from 'react'

function Login(props) {
  const [arry, setarry] = useState([])
  const [data, setData] = useState({ })
  const [dataC, setDataC] = useState({email:"",password:"" })
  const [emailerr,setemailerr]=useState("")
  const [passerr,setpasserr]=useState("")
  /// on submit butn
  const login = (event) => {
   validate(dataC)
    event.preventDefault();
    if (dataC.email !== "" && dataC.password !== "") {
      arry.push(dataC);
      setarry(arry)
    }
  }
  const validate=(dataC)=>{
   if(dataC.email===""&&dataC.password==="")
   {
     setemailerr("cant be empty")
     setpasserr("cant be empty")
   }else if(dataC.email!==""&dataC.password==="")
   {
    setpasserr("cant be empty")
   }else if(dataC.email===""&dataC.password!=="")
   {
    setemailerr("cant be empty")
   }
  }
  const verifyEmail = (event) => {
      setData({ ...data ,email :event.target.value})
      const emailRejex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
      if (emailRejex.test(data.email)) {
        setDataC({...dataC,email :data.email})
        setemailerr("")
      }
      else {
        setemailerr("Inavalid Email Id")
      }  
  }
  const verifyPassword = (event) => {
      setData({ ...data ,password :event.target.value})
      const passRejex = /([A-Z])?([a-z])+[^\w]?[\d]+/;
    if (passRejex.test(data.password)) {
      setDataC({ ...dataC ,password :data.password})
      setpasserr("")
    }
    else {
      setpasserr("Invalid password")
    }
  }
  return (
    <div  className='card shadow col-4 rounded-15px' style={{marginLeft:'400px', padding:'10px'}} >
      <h1>Login</h1>
      <>

      <label>Email:</label>
        <input className='form-control mt-2 p-3 d-block'  type="Email" name="Email"
         placeholder='Enter the Email Id' value={data.email} 
         onChange={(event) => { verifyEmail(event) }}></input>

        <span style={{color:"red",fontSize:"12px",disply:"block"}}>{emailerr}</span>
        
        <label>Password:</label>
        <input className='form-control mt-2 d-block' type="Password" name="Password" 
        placeholder='Enter the Password' value={data.password}
         onChange={(event) => { verifyPassword(event) }} ></input>
        <span style={{color:"red",fontSize:"12px",disply:"block"}}>{passerr}</span>
        <hr></hr>
        <div style={{position:"relative", left:"130px"}}>
        <button type="button" class="btn btn-primary col-4 mt-1 p-2"  type='submit'
         onClick={(event)=>{login(event)}}>submit</button>
         </div>
      </>
    </div>
  )
}

export default Login
