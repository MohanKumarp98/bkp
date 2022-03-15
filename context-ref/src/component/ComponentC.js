import React from 'react'
// import ComponentC from './ComponentC'
import UserContext from './UserContext'
import { useContext, useEffect } from 'react'

function ComponentC(props) {
const context=useContext(UserContext)
useEffect(()=>{
console.log('context',context);
},[])
    return (
        <div>
            <p> componentC context api data -{context}</p>
        </div>
    )
}

export default ComponentC