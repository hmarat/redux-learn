import {ADD, ADD2} from "./actionTypes"

export const add = number =>{
    return {type: ADD, payload: number}
}

export const asyncAdd = number =>{
    return dispatch =>{
        setTimeout(() => {dispatch(add(number))}, 3000)
    }
}

export const add2 = number =>{
    return {type: ADD2, payload: number}
}