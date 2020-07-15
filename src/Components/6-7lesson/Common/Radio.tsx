import React, {ChangeEvent, FormEvent} from "react";

type radioType = {
    id: string
    name: string
    checked: boolean
}
type allRadioType = {
    itemRadio: Array<radioType>
    setRadioCurrentValue: (name: string) => void

}


function Radio(props: allRadioType) {

    return (
        <div>

            {props.itemRadio.map(el => {
                return <label key={el.id}>
                    <input checked={el.checked}
                           onChange={() => props.setRadioCurrentValue(el.name)}
                           type="radio">

                    </input>{el.name}
                </label>
            })}

        </div>

    )


}


export default Radio