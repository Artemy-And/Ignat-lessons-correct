import React from "react";

const Test = ()=>{
    return <h1></h1>
}
// import React, {useState} from "react";
//
// function JuniorPlus(props:any){
//     let [color, setColor] = useState([
//         {id:1, color:"white", choused:false},
//         {id:2, color:"dark",choused:false},
//         {id:3, color:"green",choused:false},
//         {id:4, color:"purple",choused:false},
//     ])
//
//     const onBlack ={
//         backgroundColor:"black"
//     }
//     return (<div>
//
//         <h1>{props.message}</h1>
//         <h1>fsdfsd</h1>
//         {color.map((el:any) => <input type="radio" value={el.color} checked={el.choused}></input>)}
//      <input type="radio" />
//
//
//     </div>)
// }

//
//
//
// ////////***********************
// import React, {useState} from "react";
// import Select from "../Common/Select";
// import classes from "./JuniorPlus.module.css"
// import Radio from "../Common/Radio";
//
// export type itemsType = {
//     value:string
//     label:string
// }
// // export type itemsPropsType ={
// //     items:Array<itemsType>
// // }
//
// function JuniorPlus(props: any) {
//     let [items, setItems] = useState([
//         {value: "white", label: 'white'},
//         {value: "dark", label: 'dark'},
//         {value: "green", label: 'green'},
//         {value: "purple", label: 'purple'},
//
//     ])
//
//     // const onStyle = {
//     //     width: "30px",
//     //     height: "20px",
//     //     border: "1px solid black",
//     //     display: "inline-block",
//     //     padding: "2px",
//     //     backgroundColor: "black"
//     //
//     // }
//
//
//     let [currentValue, setCurrentValue] = useState<string>("");
//     console.log(currentValue)
//
//
//
//     return (
//         <div>
//             <br></br>
//             <br></br>
//             <br></br>
//             <h1>{props.message}</h1>
//             <h1 className={currentValue == "dark" ? classes.green : ""}>1111</h1>
//
//
//             <Select items={items} value={currentValue}
//                     setColor={setColor}
//                     // setCurrentValue={setCurrentValue}
//             />
//
//         </div>
//     )
// }
//
//
// export default JuniorPlus;
//
//
