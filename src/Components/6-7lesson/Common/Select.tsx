import React, {ChangeEvent, useState, FormEvent} from "react";

type listType = {
    value: string,
    label: string


}
type listAllType = {
    items: Array<listType>
value: string
    setCurrentValue: (value: string) => void
}



function Select(props: listAllType) {


    const onChangeFunct = (e: ChangeEvent<HTMLSelectElement>) => {
        props.setCurrentValue(e.currentTarget.value)
    }


    return (<div>

            <select
                value={props.value}
                onChange={onChangeFunct}

            >
                {props.items.map(item => (
                    <option
                        key={item.value}
                        value={item.value}
                    >
                        {item.label}
                    </option>
                ))}
            </select>


        </div>
    )
}

export default Select;




// import React, {ChangeEvent, useState} from 'react';
// import {action} from '@storybook/addon-actions';
//
// import {SelectMy, valueType} from "./SelectMy";
//
//
// export default {
//     title: 'Select stories',
//     component: SelectMy,
// };
//
// export const SelectEmpty = () => <SelectMy value={1} onChange={() => {
// }}/>;
// export const ChangeSelect = () => {
//     let [valueNext, setValueNext] = useState<Array<valueType>>([
//         {value: 1, title: "Moscow"},
//         {value: 2, title: "Minsk"},
//         {value: 3, title: "Archangelsk"},
//         {value: 4, title: "New York"},
//         {value: 5, title: "Vancouver"},
//     ])
//     let [newValue, setNewValue] = useState()
//
//     const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
//         setNewValue(e.currentTarget.value)
//     }
//     return <SelectMy value={newValue} onChange={onChange}/>;
// }