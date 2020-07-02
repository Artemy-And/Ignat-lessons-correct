import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import s from "./Input.module.css"

export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement> & { onEnter?: () => void, error?: string, onClick:()=>void, nameOfBtn:string };

function ButtonNyaNew (props: ButtonNyaPropsType) {

    return <button className={s.buttonNya} {...props}> {props.nameOfBtn}</button>
}

export default ButtonNyaNew