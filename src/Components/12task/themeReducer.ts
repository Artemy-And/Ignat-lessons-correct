import {useState} from "react";


export const SET_COLOR = "SET_COLOR"
// export const SET_LOADING_TRUE = "SET_LOADING_TRUE"
// export const SET_LOADING_FALSE = "SET_LOADING_FALSE"

export type itemsType = {
    value: string
    label: string
}

type initialStateType ={
    items:Array<itemsType>,
    currentValue:string
}

let initialState:initialStateType = {
    items: [
        {value: "white", label: 'white'},
        {value: "dark", label: 'dark'},
        {value: "green", label: 'green'},
        {value: "purple", label: 'purple'},
    ],
    currentValue:"white"
}

function themeReducer(state: initialStateType = initialState, action: allACTypes):initialStateType {
    switch (action.type) {
        case SET_COLOR:
            return {...state,
                currentValue:action.currentValue
            }

        default:

            return {...state}
    }
}

export const setColorAC = (currentValue:string): setColorType => ({
    type: SET_COLOR, currentValue
})



type allACTypes = setColorType


type setColorType = {
    type: typeof SET_COLOR
    currentValue:string



}


export default themeReducer