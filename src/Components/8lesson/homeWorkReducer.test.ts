import {hwReducer, sortedAgeArrayAC, sortedUpDownArrayAC, stateType} from "./homeWorkReducer";

test('check array of people sort up', () => {
    let payload = "up" || "down"


    const startState: Array<stateType> = [
        {id: "1", name: "Albert", age: 40},
        {id: "2", name: "George", age: 30},
        {id: "3", name: "Francia", age: 20},
        {id: "4", name: "Richard", age: 25},
        {id: "5", name: "Orlando", age: 32},
    ]


    const state1 = hwReducer(startState, sortedUpDownArrayAC('up'))
    const state2 = hwReducer(startState, sortedUpDownArrayAC('down'))

    expect(state1.length).toBe(5);
    expect(state1[0].name).toBe("Albert");
    expect(state1[1].name).toBe("Francia");
    expect(state1[2].name).toBe("George");
    expect(state1[3].name).toBe("Orlando");
    expect(state1[4].name).toBe("Richard");


    expect(state2.length).toBe(5);
    expect(state2[0].name).toBe("Richard");
    expect(state2[1].name).toBe("Orlando");
    expect(state2[2].name).toBe("George");
    expect(state2[3].name).toBe("Francia")
    expect(state2[4].name).toBe("Albert");


});


test('check array of people sort > 18 age', () => {
    let payload = 18
    const startState: Array<stateType> = [
        {id: "1", name: "Albert", age: 40},
        {id: "2", name: "George", age: 17},
        {id: "3", name: "Francia", age: 15},
        {id: "4", name: "Richard", age: 25},
        {id: "5", name: "Orlando", age: 32},
    ]


    const endState = hwReducer(startState, sortedAgeArrayAC(payload))//альтернативная запись

    expect(endState.length).toBe(3);
    expect(endState[0].name).toBe("Albert");
    expect(endState[1].name).toBe("Richard");
    expect(endState[2].name).toBe("Orlando");

});






