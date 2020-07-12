import React, {useState} from "react";
import Select from "../6-7lesson/Common/Select";
import {v1} from "uuid";
import Radio from "../6-7lesson/Common/Radio";



function PreJunior(props: any) {

    let [items, setItems] = useState([
        {value: "Milk", label: 'Milk'},
        {value: "Coffee", label: 'Coffee'},
        {value: "Tea", label: 'Tea'},
        {value: "Juice", label: 'Juice'},
        {value: "Apples", label: 'Apples'}
    ])

    const [currentValue, setCurrentValue] = useState();

    let [itemRadio, setItemRadio]= useState([
        {value:"male", name:"John"},
        {value:"male", name:"Richard"},
        {value:"female", name:"Volerma"},
        {value:"female", name:"Insignia"},

    ])
    let [radioCurrentValue, setRadioCurrentValue] = useState()


    console.log(currentValue)
    console.log(radioCurrentValue)



    return (<div>
            <h1>{props.message}</h1>
            <Select items={items} value={currentValue} setCurrentValue={setCurrentValue} />
            <Radio itemRadio={itemRadio} value = {radioCurrentValue} setRadioCurrentValue={setRadioCurrentValue}/>
        </div>
    )
}

export default PreJunior;