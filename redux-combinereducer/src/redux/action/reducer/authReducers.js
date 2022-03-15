const intialState={
    isLogin:false
}


const authReducers=(state=intialState,action) =>{
  switch(action.type)
  {
case "LOGIN": return{isLogin:action.payload}
default: return state
  }
  
}

export default authReducers;
