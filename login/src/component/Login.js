import React from 'react'
import { useState } from 'react'

function Login(props) {
  // event.preventDefault()
  const [arry, setarry] = useState([])
  const [data, setData] = useState({ email: "", password: "" })
  const [dataC, setDataC] = useState({ email: "", password: "" })
  const [emailerr,setemailerr]=useState("")
  const [passerr,setpasserr]=useState("")

  const login = (event) => {
    event.preventDefault();
    
    if (data.email !== "" && data.password !== "") {
      alert("submit succesfull")
      console.log("maoasdj");
      props.history.push("/home")
      arry.push(dataC);
      console.log(dataC);
      setarry(arry)
      console.log(arry);
    }
    else{
      if(data.email === ""&&data.password === "")
      {
        setemailerr("username cannot be empty")
        setpasserr("Passowrd cannot be empty")
      }
      else if(data.email === "" )
      {
        setemailerr("Email cannot be empty")
      }
      else if(data.password === "" )
      {
        setpasserr("Passowrd cannot be empty")
      }
    }
  }
 
  const verifyEmail = (event) => {
    const dataCopy = { ...data }
    dataCopy.email = event.target.value
    setData(dataCopy)
    const emailRejex = /^[a-z A-Z]/;
    if (emailRejex.test(event.target.value)) {
      console.log("correct value");
      const dataCcopy={...dataC}
      dataCcopy.email = event.target.value
      setDataC(dataCcopy)
      console.log(dataC);
      setemailerr("")
    }
    else {
      console.log("invalid email");
      setemailerr("Inavalid Email Id")
    }
  }

  const verifyPassword = (event) => {
    // console.log(event.target.value);
    const dataCopy = { ...data }
    dataCopy.password = event.target.value
    setData(dataCopy)
    const passRejex = /([A-Z])?([a-z])+[^\w]?[\d]+/;
    if (passRejex.test(event.target.value)) {
      console.log("correct pass");
      const dataCcopy={...dataC}
      dataCcopy.password = event.target.value
      setDataC(dataCcopy)
      console.log(dataC);
      setpasserr("")
    }
    else {
      console.log("invalid pass");
      setpasserr("Invalid password")
    }

  }
  return (
    <div  className='card shadow col-4 mt-5 rounded-15px' 
    style={{marginLeft:'450px', padding:'10px'}} >

      <h1 className="text-center">Login</h1>
      <form>
        <label className='mb-0 mt-2'>Username</label>
        <input className='form-control mt-0 p-3'  type="name" name="username"
         placeholder='Enter User Name' value={data.email} 
         onChange={(event) => { verifyEmail(event) }}></input>
        <span style={{color:"red",fontSize:"12px",disply:"block"}}>{emailerr}</span>
<div>
        <label className='mb-0 mt-2' style={{disply:"block"}} >Password</label>
        <input className='form-control mt-0' type="Password" name="Password" 
        placeholder='Enter the Password' value={data.password}
         onChange={(event) => { verifyPassword(event) }} ></input>

        <span style={{color:"red",fontSize:"12px",disply:"block"}}>{passerr}</span>
        </div>
        <hr></hr>
        
        <div className=" text-center">
        <input className='m-2 btn-primary text-center' type='submit' onClick={(event) => { login(event) }} ></input>
        </div>

      </form>
    </div>
  )
}

export default Login
