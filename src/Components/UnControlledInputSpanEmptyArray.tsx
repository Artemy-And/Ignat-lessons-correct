import React, {ChangeEvent, useState} from "react";

type inputSpanEmptyArrayType={
    value:string
    onChange:(value:string)=>void
}
// - добавьте в проект с домашками: инпут, кнопку, спан и пустой массив
// - сделайте инпут контролируемым: (useState, value, onChange)
// - сделайте функцию, которая будет здороваться с именем, введённым в инпут (брать value из useState и выводить в алерт) и повесте её на <button> и добавьте в функцию для onKeyPress инпута
// - улучшите функцию: если имя не пустое, то только тогда показывать алерт, а так же добавьте в массив объект с именем и ид используя uuid
// - отобразите в спане количество объектов (имён)




const UnControlledInputSpanEmptyArray = () => {
    let [title, setTitle] = useState<string>();

    let onChangeMethod = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }


    let onCLickMethod = () => {
        setTitle(title)
        alert("Hello " + title)
    }

return <div>
    <input
        type="text"
        value={title}
        onChange={onChangeMethod} />
    <button onClick={onCLickMethod}>ADD</button>
    <span>CHECK</span>
</div>




}



export default UnControlledInputSpanEmptyArray;