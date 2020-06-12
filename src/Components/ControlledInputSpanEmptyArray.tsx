import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {v1} from "uuid";

type inputSpanEmptyArrayType = {
    value: string
    setTitle: (value: string) => void

}
// - добавьте в проект с домашками: инпут, кнопку, спан и пустой массив
// - сделайте инпут контролируемым: (useState, value, onChange)
// - сделайте функцию, которая будет здороваться с именем, введённым в инпут (брать value из useState и выводить в алерт) и повесте её на <button> и добавьте в функцию для onKeyPress инпута
// - улучшите функцию: если имя не пустое, то только тогда показывать алерт,
// а так же добавьте в массив объект с именем и ид используя uuid
// - отобразите в спане количество объектов (имён)




const ControlledInputSpanEmptyArray = (props: inputSpanEmptyArrayType) => {
    let [arr, setArr] = useState<Array<{ id: string, name: string }>>([])





    let setTitle = (event: ChangeEvent<HTMLInputElement>) => {
        // event.preventDefault()
        props.setTitle(event.currentTarget.value)

    }

    let onClickMethod1 = () => {
        if (props.value != "") {
            onCLickMethod(props.value)
            const newObj = {
                id: v1(),
                name: props.value
            }
            setArr([...arr, newObj])
            props.setTitle('')
        } else {
            alert("Please fill in the input")
        }
    }
    let onKeyPressMethod = (event: KeyboardEvent) => {
        if (event.charCode === 13) {
            onClickMethod1()
        }
    }
    let finalName = arr.map(a => <div key={a.id}>{a.name}</div>)
    return (
        <div>

            <input type="text" onChange={setTitle} value={props.value} onKeyPress={onKeyPressMethod}/>
            <button onClick={onClickMethod1}>ADD</button>
            <div>
                <span>{finalName}</span>

            </div>

        </div>
    )

}
let onCLickMethod = (value: string) => {
    alert("Hello " + value)
}


export default ControlledInputSpanEmptyArray;