export type stateType = {
    id: string
    name: string
    age: number
}

type sortedArrayUpDownACtype = {
    type: 'SORTED-UP-DOWN-ARRAY'
    payload: string
}

type sortedAgeArrayACtype = {
    type: 'SORTED-AGE-ARRAY'
    payload: number
}


type actionType = sortedArrayUpDownACtype | sortedAgeArrayACtype

// let initialState:Array<stateType> = [
//     {id: "1", name: "Albert", age: 40},
//     {id: "2", name: "George", age: 30},
//     {id: "3", name: "Francia", age: 20},
//     {id: "4", name: "Richard", age: 25},
//     {id: "5", name: "Orlando", age: 32},
// ]


export const hwReducer = (state: Array<stateType>, action: actionType): Array<stateType> => {
    let stateCopy = [...state]
    switch (action.type) {
        case 'SORTED-UP-DOWN-ARRAY':

            if (action.payload == "up") {
                stateCopy = stateCopy.sort((a, b) => a.name.localeCompare(b.name))
                return stateCopy
            } else if (action.payload == "down") {
                stateCopy = stateCopy.sort((a, b) => a.name.localeCompare(b.name)).reverse()
                return stateCopy
            }
            return stateCopy


        case "SORTED-AGE-ARRAY":
            stateCopy = stateCopy.filter((el => el.age > action.payload))
            return stateCopy


        default:
            throw new Error("I do not undarstand this action type")

    }
};


export const sortedUpDownArrayAC = (payload: 'up' | 'down'): sortedArrayUpDownACtype => {
    return {type: 'SORTED-UP-DOWN-ARRAY', payload: payload}
}
export const sortedAgeArrayAC = (payload: number): sortedAgeArrayACtype => {
    return {type: 'SORTED-AGE-ARRAY', payload: payload}
}
