import { DECEREMENT, INCEREMENT, LOGIN, RESET } from "../constants/constants"

// action creater  --> IT IS A JS FUNC IT RETURNS AN OBJECT 
export const increment =()=>{
    return {
        type:INCEREMENT
    }
}
export const decrement =()=>{
    return {
        type:DECEREMENT
    }
}
export const reset =()=>{
    return {
        type:RESET
    }
}
export const login =(payload)=>{
    return {
        type:LOGIN,
        payload:payload
    }
}