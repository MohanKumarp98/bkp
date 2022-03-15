import logo from './logo.svg';
// import '/App.css';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react'


function App() {
 
  return (
    <Router>
    <div className="App">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse"  id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active">Home <span class="sr-only">(current)</span></a>
      <a class="nav-link">Features</a>
      <a class="nav-link">Pricing</a>
    </div>
  </div>
</nav>
      <Link to="/login"> Login </Link>
      <Link to="/register"> Register </Link>
      <Route path='/login' render={(props)=>{return <Login  />}}></Route>
      <Route path="/register" render={(props)=>{return <Register  /> }}></Route>
  {/* u can send the props as below also without angular braces */}
      {/* <Route path="/register" component={ Register }></Route> */}
      {/* <Register/> */}
    </div>
    </Router>
  );
}

export default App;
