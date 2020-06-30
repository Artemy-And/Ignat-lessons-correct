import React, {ChangeEvent, useState, KeyboardEvent} from "react";

import {v1} from "uuid";

import InputNyaNew from "./InputNyaNew";
import ButtonNyaNew from "./ButtonNyaNew ";

type inputSpanEmptyArrayType = {
    value: string;
    setTitle: (value: string) => void;
};

// - добавьте в проект с домашками: инпут, кнопку, спан и пустой массив
// - сделайте инпут контролируемым: (useState, value, onChange)
// - сделайте функцию, которая будет здороваться с именем, введённым в инпут (брать value из useState и выводить в алерт) и повесте её на <button> и добавьте в функцию для onKeyPress инпута
// - улучшите функцию: если имя не пустое, то только тогда показывать алерт,
// - а так же добавьте в массив объект с именем и ид используя uuid
// - отобразите в спане количество объектов (имён)

function ControlledInputSpanEmptyArrayMy(props: inputSpanEmptyArrayType) {
    let [arr, setArr] = useState<Array<{ id: string; name: string }>>([]);

    function removeTask(id: string) {
        let filteredNames = arr.filter(t => t.id != id);
        setArr(filteredNames);
    }


    let setTitle = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value);
    };

    let onClickMethod1 = () => {
        if (props.value != "") {
            onCLickMethod(props.value);
            const newObj = {
                id: v1(),
                name: props.value,
            };
            setArr([...arr, newObj]);
            props.setTitle("");
        } else {
            alert("Please fill in the input");
        }
    };

    let arrNames = arr.map((name) => {
        return <div key={name.id}>
            <p>{name.name}</p>
            <button onClick={() => {
                removeTask(name.id)
            }
            }>Remove
            </button>
        </div>;
    });
    let onKeyPressMethod = (event: KeyboardEvent) => {
        if (event.charCode === 13) {
            onClickMethod1();
        }
    };


    const onEnterFunct = () => {
        console.log('hello world')
    }


    return (

        <div>
            <div>
                {/*<input*/}
                {/*    type="text"*/}
                {/*    value={props.value}*/}
                {/*    onChange={setTitle}*/}
                {/*    onKeyPress={onKeyPressMethod}*/}
                {/*/>*/}
                {/*<button onClick={onClickMethod1}>ADD</button>*/}



                <InputNyaNew onKeyPressMethod={onKeyPressMethod}
                             type="text"
                             error={'error'}
                             onChange={setTitle}
                             value={props.value} />

                <ButtonNyaNew onClick={onClickMethod1} />

                <span>{arrNames}</span>
            </div>

        </div>

    );
}

let onCLickMethod = (value: string) => {
    alert("Hello " + value);
};


export default ControlledInputSpanEmptyArrayMy;
