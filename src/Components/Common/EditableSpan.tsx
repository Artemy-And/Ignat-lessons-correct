import React, {ChangeEvent, useState} from "react";
import classes from "./EditableSpan.module.css";



type EditableSpanType = {
    value: string,
    setValue: any
    // saveState:<T>(key: string, state: T)=>void
    // restoreState:<T>(key: string, defaultState: T)=>void
    // saveInfo: Function
}

function EditableSpan(props: EditableSpanType) {
    let [editMode, setEditMode] = useState<boolean>(false)
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.currentTarget.value)
    }

    function activatedEditMode() {
        setEditMode(true)
    }

    function disActivatedEditMode() {
        setEditMode(false)
        props.setValue(props.value)

    }


    return (
        editMode
            ? <input
                // value={props.value}
                onChange={changeValue}
                autoFocus={true}
                onBlur={disActivatedEditMode}
            />
            :
            <span onDoubleClick={activatedEditMode} className={classes.spann}>
                {props.value ? props.value : "Please add smth"}
            </span>
    )
}

export default EditableSpan


