import React, {InputHTMLAttributes, useState, DetailedHTMLProps, ButtonHTMLAttributes, ChangeEvent} from "react";
import s from "./Input.module.css"


// - нужно было сделать отдельно компоненту
// MyInput и отдельно MyButton
// и ими заменить стандартные инпуты и кнопки
// из предыдущих дз и использовать в будущих дз вместо стандартных
// - handlePress = (e: any) // any


export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string, onChange:(event: ChangeEvent<HTMLInputElement>)=>void,value:string, onKeyPressMethod:(type:any)=>void};

function InputNya(props: InputNyaPropsType) {

    const {onEnter, error, ...restProps} = props;


    const handlePress = (e: any) => {
   e.charCode===13 && onEnter && onEnter();




    }
    return (
        <div>
            <input
                className={s.inputNya}
                type={restProps.type}
                onKeyPress={props.onKeyPressMethod}
                value={restProps.value}
                onChange={restProps.onChange}
                placeholder={"Need smth to add"}

            />
            <span>{error}</span>
        </div>
    );
};


export default InputNya