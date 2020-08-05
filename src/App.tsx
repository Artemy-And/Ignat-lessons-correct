import React, {useState} from "react";
import "./App.css";

import Junior from "./Components/5lesson/Junior";
import JuniorPlus from "./Components/5lesson/JuniorPlus";
import PreJunior from "./Components/5lesson/PreJunior";
import {Link, Router, BrowserRouter, Route, HashRouter} from "react-router-dom";
import Navbar from "./Components/5lesson/Navbar";
import store, {AppStateType} from "./redux/redux-store";
import {useDispatch, useSelector} from "react-redux";

import Toggle from "./Components/10task/Toggle";
import preLoader from "./assets/images/loader.svg";
import {SET_LOADING, SET_LOADING_FALSE, SET_LOADING_TRUE} from "./Components/10task/unknownReducer";
import {Simulate} from "react-dom/test-utils";



export type exampleType = {
    id: number;
    key: number;
    n: string;
    p: string;
};


export type filterValueType = "all" | "hight" | "middle" | "low";

const App = () => {
    const loading = useSelector((state: AppStateType) => state.loading.loading)
    const dispatch = useDispatch()



    console.log(loading)
    console.log(loading)
    return (

        <HashRouter>

            {loading === true? <div><Toggle/></div> :
                <>
                    <Route path={"/juniorPlus"} render={() => <JuniorPlus message={"JuniorPlus"}/>}/>
                    <Route path={"/junior"} render={() => <Junior message={"Junior"}
                                                                  loading={loading}
                                                                  dispatch={dispatch}/>}/>
                    <Route path={"/preJunior"} render={() => <PreJunior message={"PreJunior"}/>}/>
                    <div><img src={preLoader}/></div>
                    <Navbar/>
                </>
            }

            {/*<button onClick={onClickFalse}>FALSE</button>*/}

            {/*- добавить на странице Junior кнопку, которая изменит loading на true */}
            {/*и запустит setTimeout, который через 3 секунды изменит loading на false*/}


        </HashRouter>
    );

};


export default App;
