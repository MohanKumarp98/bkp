import React from "react";

function withCounter(passComponent,intialCount=0)
{
    class WrappedComponent extends React.Component{
        state={
            count:intialCount
        }
        incrementCount=()=>{
            this.setState({
                count:this.state.count+1
            })
        }
        decrementCount=()=>{
            this.setState({
                count:this.state.count-1
            })
        }
        render(){
            return <passComponent 
            count={this.state.count}
            incrementCount={this.incrementCount}
            decrementCount={this.decrementCount}
            // Props pased when component is called or rendered
            {...this.props}></passComponent>
        }
    }
    }

    export default withCounter