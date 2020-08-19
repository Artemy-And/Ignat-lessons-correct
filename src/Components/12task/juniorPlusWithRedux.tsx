import React, {ChangeEvent, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {AppStateType} from "../../redux/redux-store";
import classes from "../5lesson/JuniorPlus.module.css";
import Select from "../Common/Select";
import {setColorAC} from "./themeReducer";
import {restoreState, saveState} from "./LocalStorageForJuniorPlus";


type itemsType = {
    value: string
    label: string
}


export const JuniorPlusWithRedux = () => {
    console.log("app is called")
    const dispatch = useDispatch();
    const items = useSelector<AppStateType, Array<itemsType>>(state => state.theme.items)
    const currentValue = useSelector<AppStateType, string>(state => state.theme.currentValue)
    useEffect(() => {

        restoreState1()
    }, [])

    function setColor(e: ChangeEvent<HTMLSelectElement>) {
        dispatch(setColorAC(e.currentTarget.value))
        saveState1()
    }

    ///////////*********LOCAL STARAGE***********/////////////
    const saveState1 = () => {
        saveState('currentValue', currentValue)
        // saveState('startValue', startValue)
    }

    function restoreState1() {
        let stateFromLocalStorage1 = restoreState("currentValue", currentValue);
        // let stateFromLocalStorage2 = restoreState("startValue", startValue);
        dispatch(setColorAC(stateFromLocalStorage1))
        // dispatch(setStartValueAC(stateFromLocalStorage2))
    }


    return (<div>


        <h1 className={currentValue == "green" ? classes.green : ""
        || currentValue === "purple" ? classes.purple : ""
        || currentValue === "white" ? classes.white : ""
        || currentValue === "dark" ? classes.dark : ""}>1111</h1>
        <h4>Please choose theme color</h4>

        <Select items={items}
                value={currentValue}
                setColor={setColor}
        />
        <button className={currentValue == "green" ? classes.greenBTN : ""
        || currentValue === "purple" ? classes.purpleBTN : ""
        || currentValue === "white" ? classes.whiteBTN : ""
        || currentValue === "dark" ? classes.darkBTN : ""} onClick={()=>{saveState1()}}>SAVE COLOR</button>

    </div>)
}




