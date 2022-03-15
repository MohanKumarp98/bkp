import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ComponentD() {
  const countState=useSelector(state=> state.countReducer)
  const dispatch=useDispatch()
  return <div>
<p> count in component D-{coun}</p>
  </div>;
}

export default ComponentD;
