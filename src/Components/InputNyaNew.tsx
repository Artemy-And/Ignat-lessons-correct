import React, { DetailedHTMLProps, InputHTMLAttributes, ChangeEvent } from "react"
import s from "./Input.module.css"




export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>
& { onEnter?: () => void, error?: string,  onChange:(event: ChangeEvent<HTMLInputElement>)=>void,value:string, onKeyPressMethod:(type:any)=>void };

function InputNyaNew (props: InputNyaPropsType) {
const {onEnter, error, ...restProps} = props;

const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
if (e.charCode = 13) onEnter && onEnter();
}

return (
<>
<input className={s.inputNya} onKeyPress={onKeyPress && props.onKeyPressMethod}  {...restProps} type="text"/>
{error ? <span>{error}</span> : null}
</>
);
};


export default InputNyaNew