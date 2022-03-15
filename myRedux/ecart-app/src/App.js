import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AddProducts from './components/AddProducts';
import Cart from './components/Cart';
import Orders from './components/Orders';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/add_products">add products</Link>
        <Link to="/list_products">list of products</Link>
        <Link to="/cart">cart</Link>
        <Link to="/your_orders">your orders</Link>
        <Route path="/add_products" component={AddProducts} ></Route>
        <Route path="/list_products" component={ProductList} ></Route>
        <Route path="/cart" component={Cart} ></Route>
        <Route path="/your_orders" component={Orders} ></Route>
      </div>
    </Router>
  );
}

export default App;
