import React, {useState} from "react";
import Hello from "../Hello";
import ThingsToDo from "../ThingsToDo";
import {filterValueType} from "../../App";
import ControlledInputSpanEmptyArrayMy from "../ControlledInputSpanEmptyArrayMy";
import EditableSpan from "../6-7lesson/Common/EditableSpan";
import {restoreState, saveState} from "../6-7lesson/NewLocalStorage";


function Junior(props: any) {
    let [value, setValue] = useState<string>("")
    let [title, setTitle] = useState<string>("");

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
    </div>
}

export default Junior;