


import {hwReducer, sortedAgeArrayAC, sortedDownArrayAC, sortedUpArrayAC, stateType} from "./homeWorkReducer";

test('check array of people sort up', () => {
let payload = "up"

    const startState: Array<stateType> = [
        {id:"1", name: "Albert", age: 40},
        {id:"2", name: "George", age: 30},
        {id:"3", name: "Francia", age: 20},
        {id:"4", name: "Richard", age: 25},
        {id:"5", name: "Orlando", age: 32},
    ]


    const endState = hwReducer(startState, sortedUpArrayAC(payload))//альтернативная запись

    expect(endState.length).toBe(5);
    expect(endState[0].name).toBe("Albert");
    expect(endState[1].name).toBe("Francia");
    expect(endState[2].name).toBe("George");
    expect(endState[3].name).toBe("Orlando");
    expect(endState[4].name).toBe("Richard");

});

test('check array of people sort down', () => {
    let payload = "up"

    const startState: Array<stateType> = [
        {id:"1", name: "Albert", age: 40},
        {id:"2", name: "George", age: 17},
        {id:"3", name: "Francia", age: 15},
        {id:"4", name: "Richard", age: 25},
        {id:"5", name: "Orlando", age: 32},
    ]


    const endState = hwReducer(startState, sortedDownArrayAC(payload))//альтернативная запись

    expect(endState.length).toBe(5);
    expect(endState[0].name).toBe("Richard");
    expect(endState[1].name).toBe("Orlando");
    expect(endState[2].name).toBe("George");
    expect(endState[3].name).toBe("Francia")
    expect(endState[4].name).toBe("Albert");
});

test('check array of people sort > 18 age', () => {
    let payload = "sort"
    const startState: Array<stateType> = [
        {id:"1", name: "Albert", age: 40},
        {id:"2", name: "George", age: 17},
        {id:"3", name: "Francia", age: 15},
        {id:"4", name: "Richard", age: 25},
        {id:"5", name: "Orlando", age: 32},
    ]


    const endState = hwReducer(startState, sortedAgeArrayAC(payload))//альтернативная запись

    expect(endState.length).toBe(3);
    expect(endState[0].name).toBe("Albert");
    expect(endState[1].name).toBe("Richard");
    expect(endState[2].name).toBe("Orlando");

});






