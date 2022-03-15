import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Addproducts from './components/Addproducts';
import Home from './Home';
import Navbar from './components/Navbar';
import Dishes from './components/Dishes';
import InputModal from './components/InputModal';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Link to="/register">Register</Link>
        <Link to="/login">Log in</Link>
        <Link to="/home">Home</Link>
        <Route path="/login" render={()=><Login />} />
        <Route path="/register" render={()=><Register />} />
        <Route path="/home" render={()=><Home />} />
<Addproducts />
<Dishes />
<InputModal />
      </div>
    </Router>
  );
}

export default App;
