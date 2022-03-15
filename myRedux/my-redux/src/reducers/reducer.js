const intialState=0;
export const changeTheNumber=(state=intialState,action)=>{
        switch(action.type)
        {
            case "INCREMENT": return state+action.payLoad;
            case "DECREMENT": return state-action.payLoad;
            default :return state;
        }
}