import React, { useState ,useCallback} from 'react';
import Button from './Button';
import DataCount from './DataCount';
import Title from './Title';

function ParentComponent() {

const [age, Setage] = useState(10)
const [salary, setsalary] = useState(100000)

// returns the memorized function
const incrementAge=useCallback(() => {
  Setage(age+1)
}, [age]);

const incrementSalary=useCallback(() => {
  setsalary(salary+1000)
}, [salary]);


  return <div>
<Title />
<DataCount count={age} text="Age"/>
<Button handleClick={incrementAge}>incrementAge</Button>
<DataCount count={salary} text="salary" />
<Button handleClick={incrementSalary}>incrementSalary</Button>
  </div>;
}

export default ParentComponent;
