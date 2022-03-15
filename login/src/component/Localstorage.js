import React, { useEffect, useState } from 'react'

function Localstorage(props) {

const [storage,setstorage]=useState(data)

const {data}=props

console.log(storage);
console.log(data);
useEffect(() => {
//   first;
        let local=localStorage.getItem("localData");
        if(local){
            let newer=local.json();
            setstorage([...newer])
        }
}, []);

useEffect(()=>{

    localStorage.setItem("localData",JSON.stringify(storage))

},[storage])


    return (
        <div>
            local storage
        </div>
    )
}

export default Localstorage
