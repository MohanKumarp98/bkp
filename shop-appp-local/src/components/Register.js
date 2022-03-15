import { useState, useEffect } from "react";
// import "./App.css";

function Register(props) {
    const{history}=props
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
//   const [login, setlogin] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    // setlogin(true)
    setIsSubmit(true);
    if(isSubmit===true){
        history.push("/login")
        console.log("maobagJHxgd");
      }  
      else{
          alert ("not able to route")
      }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if(!values.mobile)
    {
        errors.mobile = "Mobile Number is required";
    }else if(values.mobile.length<10||values.mobile.length>10)
    {
        errors.mobile = "Mobile Number should be a 10 digit number";
    }
    return errors;
  };

  return (
    <div className="container">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <hr></hr>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>User Name :</label>
            <br />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}}>{formErrors.username}</p>
          <div className="field">
            <label>Email :</label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}}>{formErrors.email}</p>
          <div className="field">
            <label>Mobile No :</label>
            <br />
            <input
              type="tel"
              name="mobile"
              placeholder="Enter mobile No"
              value={formValues.mobile}
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}}>{formErrors.mobile}</p>
          <div className="field">
            <label>Password :</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}}>{formErrors.password}</p>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Register;