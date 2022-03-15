import React, { useEffect } from 'react'
import { useState } from 'react'

function Register(props) {

    const{final,setfinal,correctDeatil,setcorrectDeatil,sampleDeatil,setsampleDeatil,error,seterror}=props

    // verifying the user Name here and the throwing the error if it is not correct
    const verifyName = (value) => {
        setsampleDeatil({...sampleDeatil,name : value})
        const nameRejex = /^[A-Za-z\ ][A-Za-z\ ]{3,29}$/
        if (nameRejex.test(value)) {
            setcorrectDeatil({...correctDeatil,name :value})
            seterror({...error,nameErr:""})
            console.log(error);
            console.log('name valid');
        }
        else {
            seterror({...error,nameErr:"Inavalid User Name"})
            console.log('name is not  valid');
            let errorCopy={...error}
            errorCopy.nameErr="Inavalid User"

            seterror(errorCopy)
            console.log(error);
            console.log(errorCopy);

        }
    }
console.log(error)
    // verifying the Mobile Number here and the throwing the error if it is not correct
    const verifyMobile = (event) => {
        setsampleDeatil({...sampleDeatil,mobile :event.target.value})
        const mobileRejex = /^[0-9]{10,10}$/;
        if (mobileRejex.test(event.target.value)) {
            setcorrectDeatil({...correctDeatil,mobile :event.target.value})
            console.log(correctDeatil);
            seterror({...error,mobileErr:""})
            console.log(error);

        }
        else {
            // seterror({...error,mobileErr:"Inavalid Mobile Number"})
            console.log("Inavalid Mobile Number");
            const errorCopy={...error}
            errorCopy.mobileErr="Inavalid Mobile Number"
            seterror(errorCopy)
            console.log(error);


        }
    }
    // verifying the age here and the throwing the error if it is not correct
    const verifyAge = (event) => {
    
        const sampleDeatilCopy = { ...sampleDeatil }
        sampleDeatilCopy.dateofbirth = event.target.value
        let dateOfBirth = new Date(event.target.value)
        let today = new Date()
        let Age = today.getFullYear() - dateOfBirth.getFullYear()
        sampleDeatilCopy.age = Age
        setsampleDeatil(sampleDeatilCopy)

        if (event.target.value !== "" && (Age > 2 && Age <= 100)) {
            console.log("correct Age");
            const correctDeatilCopy = { ...correctDeatil }
            correctDeatilCopy.dateofbirth = event.target.value
            correctDeatilCopy.age = Age
            setcorrectDeatil(correctDeatilCopy)
            console.log(correctDeatil);
            seterror({...error,ageErr:""})
        }
        else {
            console.log("invalid Age");
            // errorCopy.nameErr="Inavalid User"
            seterror({...error,ageErr:"Invalid Date Of Birth"})
            console.log(error);

        }
    }

    // verifying the gender here and the throwing the error if it is not correct
    const verifyGender = (event) => {
        setsampleDeatil({...sampleDeatil,gender : event.target.value})
        console.log(sampleDeatil.gender);
        if (event.target.value !== "") {
            setcorrectDeatil({...correctDeatil,gender:event.target.value})
            seterror({...error,genderErr:""})
            console.log(error);

        }
        else {
            seterror({...error,genderErr:"Please Fill The Gender"})
            console.log("Please Fill The Gender");
            console.log(error);

        }
    }

    // verifying the email id here and the throwing the error if it is not correct
    const verifyEmail = (event) => {
        setsampleDeatil( { ...sampleDeatil, email :event.target.value})
        const emailRejex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if (emailRejex.test(event.target.value)) {
            setcorrectDeatil({ ...correctDeatil ,email :event.target.value})
            console.log(correctDeatil);
            seterror({...error,emailErr:""})
            console.log(error);

        }
        else {
            seterror({...error,emailErr:"Inavalid Email Id"})
            console.log(error);

        }
    }

    // verifying the passowrd and thowing the error if the password is not correct
    const verifyPassword = (event) => {
        setsampleDeatil({ ...sampleDeatil, password :event.target.value})
        const passRejex = /([A-Z])?([a-z])+[^\w]?[\d]+/;
        if (passRejex.test(event.target.value)) {
            setcorrectDeatil({...correctDeatil,password:event.target.value})
            console.log(correctDeatil);
            seterror({...error,passErr:""})
            console.log(error);

        }
        else{
            console.log("invalid pass");
            seterror({...error,passErr:"Invalid password"})
            console.log(error);

        }
    }

    // verifying the confirm passowrd and thowing the error with the password and the confirm password 

    const verifyConfirmPassword = (event) => {
        setsampleDeatil({...sampleDeatil,confirmpassword :event.target.value})
        const passRejex = /([A-Z])?([a-z])+[^\w]?[\d]+/;
        if (passRejex.test(event.target.value)) {
            console.log("correct pass");
            if (correctDeatil.password === event.target.value) {
            seterror({...error,cpassErr:""})
                setcorrectDeatil({...correctDeatil,confirmpassword :event.target.value})
                console.log(correctDeatil);
            }
        }
        else {
            seterror({...error,cpassErr:"passwords are not Same "})
        }
    }

    const finalCopy = [...final]

    const login = (event) => {
        event.preventDefault()
        let valCopy = Object.values(correctDeatil)
        let valArray = valCopy.filter((val) => {
            return (val !== "")
        })
        const mohan= finalCopy.map((vale) => {
            console.log("maping");
            if ((vale.email === correctDeatil.email) || (vale.mobile === correctDeatil.mobile)) {
               return 0;
            }
            else{
                return 1;
            }
            })
        if (valArray.length === 8) {
            console.log(mohan,"mohankumar");
            if(final.length===0){
                finalCopy.push(correctDeatil)
                setfinal(finalCopy)
                console.log(finalCopy);
                console.log(final);
                seterror({...error,pushErr:''})
            }
            else if((mohan[0]===1)&&(mohan.includes(0)===false)){
                finalCopy.push(correctDeatil)
                setfinal(finalCopy)
                console.log(finalCopy);
                console.log(final);
                seterror({...error,pushErr:''})
            }
            else{
                seterror({...error,pushErr:'User Already Exists'})
            }
        }   
        console.log(final);
    }
    
    const eventTest=(event)=>{
        console.log(correctDeatil);
        verifyName(event);
        verifyEmail(event);
        verifyMobile(event);
        verifyPassword(event);
        verifyConfirmPassword(event);
        verifyAge(event);
    }

    useEffect(()=>{

    },[error])
    return (
        <div className='card shadow col-9  rounded-15px pl-4 pr-4' style={{marginLeft:'400px', padding:'10px'}}>
                    <h1>Register form</h1>
            <>
                <input  className='form-control mt-4 p-3 'type="text" name="name" 
                placeholder='Enter Your Name' value={sampleDeatil.name}
                 onChange={(event) => { verifyName(event.target.value) }}></input>
                <span style={{ color: "red", fontSize: "12px", display: "block" }}>{error.nameErr}</span>

                <input placeholder='Enter your age' className='form-control mt-4 p-3' type="Date" name="age" 
                onChange={(event) => { verifyAge(event) }} ></input>
                <span style={{ color: "red", fontSize: "12px", display: "block" }}>{error.ageErr}</span>

                <input className='form-control mt-4 p-3' type="tel" name="mobile" 
                placeholder='Enter Your Mobile Number' value={sampleDeatil.mobile} onChange={(event) => { verifyMobile(event) }}></input>
                <span style={{ color: "red", fontSize: "12px", display: "block" }}>{error.mobileErr}</span>


                <input className='form-control mt-4 p-3' type="Email" name="Email"
                 placeholder='Enter the Email Id' value={sampleDeatil.email} 
                 onChange={(event) => { verifyEmail(event) }}></input>
                <span style={{ color: "red", fontSize: "12px", display: "block" }}>{error.emailErr}</span>

                <div onChange={verifyGender} className='form-control mt-3 p-1' >
                    <span className='float-left ml-2 '>Gender :</span>
                    <input className=' mr-1 ' type="radio" name="gender" value="Male" /><label className=' mr-5 '>Male</label>
                    <input className=' mr-1' type="radio" name="gender" value="Female" /><label className=' mr-5 '>FeMale</label>
                    <span style={{ color: "red", fontSize: "12px", dispaly: "block" }}>{error.genderErr}</span>
                </div>

                <input className='form-control mt-3 p-3' type="Password" name="Password" 
                placeholder='Enter the Password' value={sampleDeatil.password}
                 onChange={(event) => { verifyPassword(event) }} ></input>
                <span style={{ color: "red", fontSize: "12px", display: "block" }}>{error.passErr}</span>

                <input className='form-control mt-4 p-3' type="Password" name="Confirm Password" 
                placeholder='Confirm the Password' value={sampleDeatil.confirmpassword} 
                onChange={(event) => { verifyConfirmPassword(event) }} ></input>
                <span style={{ color: "red", fontSize: "12px", display: "block" }}>{error.cpassErr}</span>

                <button type="button" className="btn btn-primary col-4 mt-4 p-2"  type='submit'
                 onMouseDown={ (event)=>{  login(event)}} onClick={(event)=>{eventTest(event)}}>submit</button>
                <span style={{ color: "red", fontSize: "12px", display: "block" }}>{error.pushErr}</span>

            </>
        </div> 
    )
}

export default Register
