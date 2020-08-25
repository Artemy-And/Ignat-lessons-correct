import React, {ChangeEvent, useEffect, useState} from "react";
import ButtonNyaNew from "../ButtonNyaNew ";
import {testAPI} from "./api/api";



export const Request = () => {

    const [state, setState] = useState<boolean>(true)

    const UpdateTodolistTitle = () => {
        testAPI.requestAPI(state)
            .then((res:any) => {
                // debugger;
                setState(res.yourBody.success.state)
                console.log(res)

            })

    }

const onChangeValue = (e:ChangeEvent<HTMLInputElement>)=>{
    setState(e.currentTarget.checked)
    // console.log(state)
}

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>{JSON.stringify(state)}</div>
            <ButtonNyaNew nameOfBtn={'Request'} onClick={UpdateTodolistTitle}/>
            <input type={'checkbox'} checked={state} onChange={onChangeValue}/>

        </div>
    )
}