import React, { useState, useReducer, useEffect } from 'react';
import axios from 'axios';

const intialState = {
    loading: false,
    data: [],
    err: ""
}
const reducer = (state, action) => {
    switch (action.type) {
        case "loading":
            return { ...state, loading: action.payload }
        case "FETCH_SUCESS":
            return { ...state, data: action.payload, loading: false }
        case "FETCH_FAILURE":
            return { ...state, data: [], loading: false, err: action.payload }
        default: return state
    }
}

function PostList() {

    const [state, dispatch] = useReducer(reducer, intialState);
    useEffect(()=>{
        fetchposts()
    })

    const fetchposts=async()=>{
        try{
            dispatch({
                type:"LOADING",
                payload:true
            })
            let newer= await axios.get("https://jsonplaceholder.typicode.com/posts")
            dispatch({
                type:"FETCH_SUCESS",
                payload:newer.data
            })
        }catch(err){
            dispatch({
                type:"FETCH_FAILED",
                payload:err.message
            })
        }
    }

    if(state.loading){
        return <p>Loading...</p>
    }
    if (state.err)
    {
        return <p>{state.err}</p>
    }
    return <div>
        {state.data.map(post=>{
            return <p key={post.id}>tiltle - {post.title}</p>
        })}
    </div>;
}

export default PostList;
