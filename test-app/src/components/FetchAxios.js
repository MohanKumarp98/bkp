import axios from 'axios';
import React, { useState,useEffect } from 'react';

function FetchAxios() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{ setdata(res.data)}).catch(err=>{console.log(err);
    })
    }, [ ]);

   
console.log(data);
    
  return <div>
      {data.map((val)=>{
          return <div className='card col-6 mt-2' key={val.id}>
<h5 class="card-title">{val.id}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{val.title}</h6>
    <p class="card-text">{val.body}</p>
          </div>
      })}
  </div>;
}

export default FetchAxios;
