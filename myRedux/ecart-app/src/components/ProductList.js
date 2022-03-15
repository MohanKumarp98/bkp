import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductList() {
const [products, setproducts] = useState([])

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/photos").then(res=>{setproducts(res.data)}).catch(err=>{console.log(err);})
    }, [])
    
    console.log(products);

  return (
    <div>
<table className="table table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>price</th>
      <th>thumb Nail</th>
      <th>category</th>
      <th width="60px">title</th>
    </tr>
  </thead>
  <tbody>
      {products.map((val,i)=>   
      <tr  key={i}>
      <td>{val.id}</td>
      <td>{val.albumId}</td>
      <td><img src={val.thumbnailUrl} /></td>
      <td><img src={val.image} width="20px" /></td>
      {/* <td>{val.category}</td> */}
      <td align='left'>{val.title}</td>
    </tr> )}
  </tbody>
</table>
    </div>
  )
}

export default ProductList