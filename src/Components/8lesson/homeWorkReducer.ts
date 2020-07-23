import React from "react"

export type stateType = {
    id: string
    name: string
    age: number
}


type sortedArrayUpACtype = {
    type: 'SORTED-UP-ARRAY'
    payload: string
}
type sortedArrayDownACtype = {
    type: 'SORTED-DOWN-ARRAY'
    payload: string
}
type sortedAgeArrayACtype={
    type: 'SORTED-AGE-ARRAY'
    payload: string
}


type actionType = sortedArrayUpACtype|sortedArrayDownACtype|sortedAgeArrayACtype


export const hwReducer = (state: Array<stateType>, action: actionType): Array<stateType> => {
        let stateCopy = [...state]
        switch (action.type) {
            case 'SORTED-UP-ARRAY':

                    stateCopy= stateCopy.sort((a, b) => a.name.localeCompare(b.name))
                return stateCopy

            case 'SORTED-DOWN-ARRAY':

                    stateCopy= stateCopy.sort((a, b) => a.name.localeCompare(b.name))
                    .reverse()
                return stateCopy

            case "SORTED-AGE-ARRAY":
                stateCopy = stateCopy.filter((el => el.age > 18))
                return stateCopy


            default:
                throw new Error("I do not undarstand this action type")

        }
    };


export const sortedUpArrayAC = (payload: string): sortedArrayUpACtype => {
    return {type: 'SORTED-UP-ARRAY', payload: payload}
}


export const sortedDownArrayAC = (payload: string): sortedArrayDownACtype => {
    return {type: 'SORTED-DOWN-ARRAY', payload: payload}
}

export const sortedAgeArrayAC = (payload: string): sortedAgeArrayACtype => {
    return {type: 'SORTED-AGE-ARRAY', payload: payload}
}
