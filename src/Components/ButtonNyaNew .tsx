import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import s from "./Input.module.css"

export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement> & { onEnter?: () => void, error?: string, onClick:()=>void };

function ButtonNyaNew (props: ButtonNyaPropsType) {

    return <button className={s.buttonNya} {...props}> Click</button>
}

export default ButtonNyaNew