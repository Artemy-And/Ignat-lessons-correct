import React, {useState} from "react";
import "./App.css";
import Hello from "./Components/Hello";
import ThingsToDo from "./Components/ThingsToDo";

import ControlledInputSpanEmptyArray from "./Components/ControlledInputSpanEmptyArray";
import ControlledInputSpanEmptyArrayMy from "./Components/ControlledInputSpanEmptyArrayMy";
import UncontrolledRating
    from "../../../react-kabzda-kak-prosto/8-typescript-callbacks/src/components/Rating/UncontrolledRating";
import UnControlledInputSpanEmptyArray from "./Components/UnControlledInputSpanEmptyArray";
import {v1} from "uuid";
import InputNyaNew from "./Components/InputNyaNew"
import ButtonNyaNew from "./Components/ButtonNyaNew ";
import Junior from "./Components/5lesson/Junior";
import JuniorPlus from "./Components/5lesson/JuniorPlus";
import PreJunior from "./Components/5lesson/PreJunior";
import {Link, Router, BrowserRouter, Route, HashRouter} from "react-router-dom";
import Navbar from "./Components/5lesson/Navbar";


export type exampleType = {
    id: number;
    key: number;
    n: string;
    p: string;
};

export type filterValueType = "all" | "hight" | "middle" | "low";

const App = () => {


    return (
        <HashRouter>
            <div>
                <div>

                </div>
                <Route path={"/juniorPlus"} render={() => <JuniorPlus message={"JuniorPlus"}/>}/>
                <Route path={"/junior"} render={() => <Junior message={"Junior"}/>}/>
                <Route path={"/preJunior"} render={() => <PreJunior message={"PreJunior"}/>}/>

                <Navbar/>
            </div>

        </HashRouter>
    );
};

export default App;
