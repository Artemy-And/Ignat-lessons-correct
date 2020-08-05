import React, {useReducer, useState} from "react";
import Hello from "../Hello";
import ThingsToDo from "../ThingsToDo";
import {filterValueType} from "../../App";
import ControlledInputSpanEmptyArrayMy from "../ControlledInputSpanEmptyArrayMy";
import EditableSpan from "../6-7lesson/Common/EditableSpan";
import {restoreState, saveState} from "../6-7lesson/NewLocalStorage";
import {hwReducer, sortedAgeArrayAC, sortedUpDownArrayAC, stateType} from "../8lesson/homeWorkReducer";
import moment from "moment";
import {Tooltip} from "@material-ui/core";


import {useDispatch} from "react-redux";
import {SET_LOADING_FALSE, SET_LOADING_TRUE} from "../10task/unknownReducer";


function Junior(props: any) {
    let [value, setValue] = useState<string>("")
    let [title, setTitle] = useState<string>("");


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

//////////////******************8task************///////////////

    let [listOfPeople, dispatch] = useReducer(hwReducer, [
        {id: "1", name: "Albert", age: 40},
        {id: "2", name: "George", age: 17},
        {id: "3", name: "Francia", age: 15},
        {id: "4", name: "Richard", age: 25},
        {id: "5", name: "Orlando", age: 32},
    ])


    const onCLickSortAllow18Years = () => {
        dispatch(sortedAgeArrayAC(18))
    }
    const onCLickSortUp = () => {
        dispatch(sortedUpDownArrayAC("up"))
    }
    const onClickSortDown = () => {
        dispatch(sortedUpDownArrayAC("down"))
    }


    //////////////******************9task************///////////////

    let datePopUp = moment().format("DD-MM-YYYY")

    let [date, setDate] = useState<{ date: Date }>({
        date: new Date()
    })
    let [timerId, setTimerId] = useState<NodeJS.Timeout>()


    let callMe = () => {
        timerId && clearInterval(timerId)
        let timer_id = setInterval(() => {
            setDate({date: new Date()})
        }, 1000)
        setTimerId(timer_id);
    }
    let callMeStopToStop = () => {
        timerId && clearInterval(timerId)
    }

    //////////////******************10task************///////////////
    const OnclickTrue = () => {
        props.dispatch({type: SET_LOADING_TRUE})
        console.log(props.loading)

        setTimeout(() => {
            props.dispatch({type: SET_LOADING_FALSE})
        }, 2000)
    }

    const onCLickFalse = () => {
        props.dispatch({type: SET_LOADING_FALSE})
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


        <h2>TASK 9</h2>
        <Tooltip title={datePopUp} aria-label={datePopUp} style={{fontSize: "25px"}}>
            <span>Current time is: {date.date.toLocaleTimeString()}</span>
        </Tooltip>
        <br></br>
        <button onClick={callMe}>setInterval</button>
        <button onClick={callMeStopToStop}>clearInterval</button>

        <h2>TASK 10</h2>
        <button onClick={OnclickTrue}>TRUE</button>


    </div>
}

export default Junior;

