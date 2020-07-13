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

    let [itemRadio, setItemRadio] = useState([
        {value: "male", name: "John", checked: false},
        {value: "male", name: "Bendjamin", checked: false},
        {value: "female", name: "Volerma", checked: true},
        {value: "female", name: "Insignia", checked: false},

    ])
    // let [radioCurrentValue, setRadioCurrentValue] = useState<boolean>()

    const functionRadioChecked = (name: string) => {
        const newItem = itemRadio.map(item => {
            if (item.name === name) {
                return {...item, checked: true}
            } else {
                return {...item, checked: false}
            }
        })
        setItemRadio(newItem);
    }


    console.log(currentValue)


    return (<div>
            <h1>{props.message}</h1>
            <Select items={items} value={currentValue} setCurrentValue={setCurrentValue}/>
            <Radio itemRadio={itemRadio} setRadioCurrentValue={functionRadioChecked}/>
        </div>
    )
}

export default PreJunior;


//
// import React, {useState} from "react";
// import Select from "../6-7lesson/Common/Select";
// import {v1} from "uuid";
// import Radio from "../6-7lesson/Common/Radio";
//
//
//
// function PreJunior(props: any) {
//
//     let [items, setItems] = useState([
//         {value: "Milk", label: 'Milk'},
//         {value: "Coffee", label: 'Coffee'},
//         {value: "Tea", label: 'Tea'},
//         {value: "Juice", label: 'Juice'},
//         {value: "Apples", label: 'Apples'}
//     ])
//
//     const [currentValue, setCurrentValue] = useState();
//
//     let [itemRadio, setItemRadio]= useState([
//         {value:"male", name:"John", checked:false},
//         {value:"male", name:"Bendjamin",checked:false},
//         {value:"female", name:"Volerma",checked:true},
//         {value:"female", name:"Insignia",checked:false},
//
//     ])
//     // let [radioCurrentValue, setRadioCurrentValue] = useState<boolean>()
//
//     const functionRadioChecked =(name: string)=>{
//         const newItem = itemRadio.map(item => {
//             if(item.name === name) {
//                 return {...item, checked: true}
//             } else {
//                 return {...item, checked: false}
//             }
//         })
//         setItemRadio(newItem);
//     }
//
//
//     console.log(currentValue)
//
//
//
//
//     return (<div>
//             <h1>{props.message}</h1>
//             <Select items={items} value={currentValue} setCurrentValue={setCurrentValue} />
//             <Radio itemRadio={itemRadio} setRadioCurrentValue={functionRadioChecked} />
//         </div>
//     )
// }
//
// export default PreJunior;
