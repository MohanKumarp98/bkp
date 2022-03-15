import React, { useEffect, useState } from 'react';

function Postdetails(props) {
const [detail, setdetail] = useState({});

useEffect (() => {
  console.log(props);
  // console.log(props.match.params.postId);
  let urlExtention=props.match.params.postId
  console.log(urlExtention)
  
  fetch(`https://jsonplaceholder.typicode.com/posts/${urlExtention}`).then(res=>res.json()
  ).then(res=>setdetail(res)).catch((err)=>{console.log(err);})
}, []);

  return <div>
      <p>Id : {detail.id}</p>
      <p>title : {detail.title}</p>
      <p>body : {detail.body}</p>
  </div>;
}

export default Postdetails;
