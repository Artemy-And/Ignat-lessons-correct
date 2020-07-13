import React, {ChangeEvent, FormEvent} from "react";

type radioType = {
    value: string
    name: string
    checked: boolean
}
type allRadioType = {
    itemRadio: Array<radioType>
    setRadioCurrentValue: (name: string) => void

}


function Radio(props: allRadioType) {

    return (
        <div><label>

            {props.itemRadio.map(el => {
                return <label key={el.value}>
                    <input checked={el.checked}
                           onChange={() => props.setRadioCurrentValue(el.name)}
                           type="radio">

                    </input>{el.name}</label>
            })}

        </label></div>

    )


}


export default Radio