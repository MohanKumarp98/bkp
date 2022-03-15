import React, { useEffect, useState } from 'react';

function PostList(props) {

const [posts, Setposts] = useState([])
useEffect (() => {

fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()
).then(res=>Setposts(res)).catch((err)=>{console.log(err);})
  
}, []);

// console.log(posts)
const navigateToPostDetail=(postId)=>{
  // console.log(props)
  // console.log(props.history)
    props.history.push(`/posts/${postId}`)
}

  return <div>
{posts.map((post)=>{
  // console.log(post.id)
    return <p key={post.id} onClick={()=>{navigateToPostDetail(post.id)}}> {post.id} : {post.title}</p>
})}
<p>mohan</p>
  </div>;
}

export default PostList;
