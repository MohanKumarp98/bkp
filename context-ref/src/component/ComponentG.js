import {UserConsumer} from './UserContext';
import React, { Component } from 'react';
import {UserContext} from '/UserContext'


export class ComponentG extends Component {
static contextType=UserContext
constructor(props)
{
    super(props)
    this.iRef=React.createRef()
    this.pRef=React.createRef()
}


componentDidMount()
{
    console.log(this);
    console.log('context',this.context);
}

  render() {
    return <div>

<input ref={this.iref} type='text' placeholder='enter your name'></input>
<input ref={this.pref} type='password' placeholder='enter password'></input>
<button onClick={()=>{ this.pRef.current.focus()}}>change the focus</button>

<UserConsumer>
    {
        (contextData)=>{
            return <p>ComponentG -{contextData}</p>
        }
    }
</UserConsumer>
<p> Name-{this.context}</p>
    </div>;
  }
}

export default ComponentG;
