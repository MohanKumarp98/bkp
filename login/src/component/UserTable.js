import React from 'react'
import { useState } from 'react'


function UserTable(props) {

const{data}=props

  const [final, setfinal] = useState(data)
  const [newtable, setnewtable] = useState(false)

  const dataCopy=[...final]
  
    const showTable = () => {
        setnewtable(true)
        
    }

    return ( <div>
            <div>
                <button onClick={showTable} className="btn btn-primary mb-5">showTable</button>
            </div>
            <table className='table table-striped' style={{width:"100vw"}}>
            <thead>
            <th>slno</th>
            <th>Name</th>
            <th>Email Id</th>
            <th>Mobile No</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Age</th>
            <th>Password</th>
            </thead>
                {newtable?dataCopy.map((val,ind)=>{
                    return <tr key={ind+1}>
                            <td>{ind+1}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.mobile}</td>
                            <td>{val.gender}</td>
                            <td>{val.dateofbirth}</td>
                            <td>{val.age}</td>
                            <td>{val.password}</td>
                            </tr>
                }):newtable}
                
            </table>
            </div> 
    )
}

export default UserTable
