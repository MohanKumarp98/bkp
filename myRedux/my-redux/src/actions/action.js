export const incrementNum=(num)=>{
    return {
        type:"INCREMENT",
        payLoad:num,
    }
}

export const decrementNum=(num)=>{
    return {
        type:"DECREMENT",
        payLoad:num,
    }
}