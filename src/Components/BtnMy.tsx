import React, {InputHTMLAttributes, useState, DetailedHTMLProps, ButtonHTMLAttributes} from "react";
import s from "./Input.module.css"




export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & { onEnter?: () => void, error?: string, onClick:()=>void };

function  BtnMy(props: ButtonNyaPropsType) {




    return (
        <div>
            <button className={s.myBtn} onClick={props.onClick}>Add</button>
        </div>
    );
};


export default BtnMy