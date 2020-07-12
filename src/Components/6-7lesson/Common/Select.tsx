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


