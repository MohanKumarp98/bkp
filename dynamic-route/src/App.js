import logo from './logo.svg';
import './App.css';
import PostList from './ccomponents/PostList';
import Postdetails from './ccomponents/Postdetails';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
// import { Route, Router,Link } from 'react-router-dom';

function App() {
  return (
    <Router >
    <div className="App">
      <Link to="/posts">posts</Link>
      <Link to="/post/Detail">Postdetails</Link>
      <Route exact path='/'render={(props)=>{
        return <div>home</div>
      }}/>
      <Route exact path='/posts' render={(props)=>{
        return <PostList {...props} />
      }}/>
      <Route exact path='/posts/:postId' component={Postdetails}/>
     {/* <PostList /> */}
    </div>
    </Router>
  );
}

export default App;
