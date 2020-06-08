import React from "react";
import {exampleType, filterValueType} from "../App";
import classes from "./ThingsToDo.module.css";


type ExamplePropsType = {

}

type exapmleAllType = {

    example: Array<exampleType>
    removeExample:(id:number)=>void
    changeFilter: (value:filterValueType) => void
}
const ThingItem = (props: any) => {
    return (
        <div>
            <p id={props.id}> {props.n} {props.p}</p>

        </div>
    )
}


const ThingsToDo = (props: exapmleAllType) => {
    let things = props.example.map((thing) => {

        return <ul>
        <li className={classes.todolist}><ThingItem id={thing.id} key={thing.key} n={thing.n}/>
        <button className={classes.firstBtn} onClick={()=>{
        props.removeExample(thing.id)}
        }>x</button>
        </li></ul>
    });

    return (
        <div className={classes.all}>
            <span className={classes.todolist2}>{things}</span>
            <div className={classes.btnAll}>
           <button onClick={()=>{props.changeFilter("all")
           }}>All</button>
            <button onClick={()=>{
                props.changeFilter("hight")
            }}>HIGHT</button>
            <button onClick={()=>{
                props.changeFilter("middle")
            }}>Middle</button>
            <button onClick={()=>{
                props.changeFilter("low")
            }}>Low</button>
            </div>

        </div>
    );
};


// <li key={task.id}>
//     <input type="checkbox" checked={task.isDone} />
//     <span>{task.title}</span>
//     <button
//         onClick={() => {
//             props.removeTask(task.id);
//         }}
//     >
//         Delete
//     </button>
// </li>





export default ThingsToDo


