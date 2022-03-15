import logo from './logo.svg';
import './App.css';
import CalculatorComp from './components/CalculatorComp';

import React,{Suspense,useState} from 'react';
import ParentComponent from '../../usememo-usecallback/src/components/ParentComponent';

//react Lazy loading 
const lazy1=React.lazy(()=>{
  return import('../components/ComponentA')
})

function App() {

const [showComponent,setshowComponent]=useState(false)

  return (
    <div className="App">
      {/* <CalculatorComp />
      <button onClick={()=>{
        setshowComponent(!showComponent)
      }}>{showComponent?"hide":"show"}</button>

      {showComponent && <Suspense fallback={<div>Loading</div>}><lazy1/></Suspense>} */}
      <ParentComponent />
    </div>
  );
}

export default App;
