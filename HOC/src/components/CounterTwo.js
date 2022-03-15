import React from "react";
// import { Component } from "react/cjs/react.production.min";
import withCounter from "/withCounter.js"


export class CounterOne extends Component{
    render(){
        const {count,incrementCount,decrementCount}=this.this.props;

        return <>
        {/* <p>UserName -{this.props.userName}</p> */}
        <p>count-{count}</p>
        <button onClick={incrementCount}>increment</button>
        <button onClick={decrementCount}>decrement</button>
        </>
        
    }
}

export default withCounter(CounterTwo)
