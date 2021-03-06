import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <Router>        
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <Link className="navbar-brand" to=""></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Features</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Pricing</Link>
      </li>
    </ul>
    <span className="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
</Router>
    </div>
  )
}

export default NavBar