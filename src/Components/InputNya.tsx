import React, {InputHTMLAttributes, useState, DetailedHTMLProps, ButtonHTMLAttributes} from "react";
import s from "./Input.module.css"




export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string };

function InputNya(props: InputNyaPropsType) {

    const {onEnter, error, ...restProps} = props;


    const handlePress = (e: any) => {
   e.charCode===13 && onEnter && onEnter();



    }
    return (
        <div>
            <input
                className={s.inputNya}
                type="text"
                onKeyPress={handlePress}
                placeholder={"Need smth to add"}

            />
            <button className={s.myBtn}>Add</button>
            <span>{error}</span>
        </div>
    );
};


export default InputNya