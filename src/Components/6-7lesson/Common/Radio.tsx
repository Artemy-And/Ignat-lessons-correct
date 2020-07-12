import React, {ChangeEvent, FormEvent} from "react";

type radioType = {
    value: string,
    name: string
}
type allRadioType = {
    itemRadio: Array<radioType>
    setRadioCurrentValue: (value: string) => void
    value: string
}


function Radio(props: allRadioType) {


    const onChangeFunct = (e: any) => {//вот тут когда ставлю тип e:ChangeEvent<HTMLInputElement> не работает VALUE ниже
        props.setRadioCurrentValue(e.currentTarget.value)//это value не работае
    }

    return (
        <div><label>
            {props.itemRadio.map(el => {
                return <label key={el.value}>
                    <input value={props.value}
                           onChange={onChangeFunct}
                           type="radio">

                    </input>{el.name}</label>
            })}

        </label></div>
    )


}


export default Radio