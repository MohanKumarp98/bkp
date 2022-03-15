import React,{useContext} from 'react';
import DataContext from './DataContext';


function ComponentF() {

    
    let data=useContext(DataContext)
  return <div>
ComponentF -{data}
<button onClick={()=>{
data='999'
console.log(data);
}}>update Data</button>
  </div>;
}

export default ComponentF;
