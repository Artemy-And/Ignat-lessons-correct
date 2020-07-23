import React, {useState} from "react";
import Hello from "../Hello";
import ThingsToDo from "../ThingsToDo";
import {filterValueType} from "../../App";
import ControlledInputSpanEmptyArrayMy from "../ControlledInputSpanEmptyArrayMy";
import EditableSpan from "../6-7lesson/Common/EditableSpan";
import {restoreState, saveState} from "../6-7lesson/NewLocalStorage";
import {stateType} from "../8lesson/homeWorkReducer";


function Junior(props: any) {
    let [value, setValue] = useState<string>("")
    let [title, setTitle] = useState<string>("");


    let [listOfPeople, setListOfPeople] = useState<Array<stateType>>([
        {id: "1", name: "Albert", age: 40},
        {id: "2", name: "George", age: 17},
        {id: "3", name: "Francia", age: 15},
        {id: "4", name: "Richard", age: 25},
        {id: "5", name: "Orlando", age: 32},
    ])
    let [newlistOfPeople, setNewlistOfPeople] = useState()


    let [example, setExample] = useState([
        {id: 1, key: 55, n: "Work", p: "Hight"},
        {id: 2, key: 55, n: "Chill", p: "Middle"},
        {id: 3, key: 55, n: "Games", p: "Low"},
        {id: 4, key: 55, n: "React", p: "Hight"},
        {id: 5, key: 55, n: "HTML", p: "low"},
    ]);
    let [filter, setFilter] = useState<filterValueType>("all");

    function removeExample(id: number) {
        let filtredExample = example.filter((t) => t.id !== id);
        setExample(filtredExample);
    }

    function changeFilter(value: filterValueType) {
        setFilter(value);
    }

    let filterValue = example;
    if (filter === "hight") {
        filterValue = example.filter((thing) => thing.p === "Hight");
    }
    if (filter === "middle") {
        filterValue = example.filter((thing) => thing.p === "Middle");
    }
    if (filter === "low") {
        filterValue = example.filter((thing) => thing.p === "Low");
    }


    const saveState1 = () => {
        saveState('local title', value)
    }

    function restoreState1() {
        let stateFromLocalStorage = restoreState("local title", value);
        setValue(stateFromLocalStorage)
    }


    const onCLickSortAllow18Years = () => {
        let stateCopy = [...listOfPeople]
        stateCopy = stateCopy.filter((el => el.age > 18))
        setListOfPeople(stateCopy)
    }
    const onCLickSortUp = () => {
        let stateCopy = [...listOfPeople]
        stateCopy = stateCopy.sort((a, b) => a.name.localeCompare(b.name))
        setListOfPeople(stateCopy)
    }

    const onClickSortDown = () => {
        let stateCopy = [...listOfPeople]
        stateCopy = stateCopy.sort((a, b) => a.name.localeCompare(b.name))
            .reverse()
        setListOfPeople(stateCopy)

    }
    return <div>
        <h1>{props.message}</h1>
        <Hello name="Artemy" surname="Andruschak"/>
        <div>
            <ThingsToDo
                example={filterValue}
                removeExample={removeExample}
                changeFilter={changeFilter}
            />
        </div>
        <div>
            {/*<ControlledInputSpanEmptyArray value={title} setTitle={setTitle} />*/}
            <ControlledInputSpanEmptyArrayMy value={title} setTitle={setTitle}/>
            <EditableSpan value={value} setValue={setValue}/>
            {/*<EditableSpan value={value} setValue={setValue}/>*/}
            <div>
                <button onClick={saveState1}>SAVE</button>
                <button onClick={restoreState1}>RESTORE</button>
            </div>
            {/*<UnControlledInputSpanEmptyArray />*/}

        </div>

        <div><h2>TASK 8</h2>
            <span>{listOfPeople.map(el =>
                <div key={el.id}>{el.name} {el.age} Age</div>
            )}</span>
            <div>{newlistOfPeople}</div>
            <br></br>
            <button onClick={onCLickSortAllow18Years}>SORT Who older 18</button>
            <button onClick={onCLickSortUp}>SORT UP</button>
            <button onClick={onClickSortDown}>SORT DOWN</button>
        </div>

    </div>
}

export default Junior;