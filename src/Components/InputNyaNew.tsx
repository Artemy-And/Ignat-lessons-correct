import React, {DetailedHTMLProps, InputHTMLAttributes, ChangeEvent} from "react"
import s from "./Input.module.css"


export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string, onChange: (event: ChangeEvent<HTMLInputElement>) => void, onKeyPressProps: () => void };

//

function InputNyaNew(props: InputNyaPropsType) {
    const {onKeyPressProps, error, ...restProps} = props;

    let onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // debugger;
        if (e.charCode === 13) {
            // debugger;
            onKeyPressProps()
        }

    }

    return (
        <>
            <input className={s.inputNya} onKeyPress={onKeyPress} {...restProps}
                   type={restProps.type ? restProps.type : "text"}/>
            {error ? <span>{error}</span> : null}
        </>
    );
};


export default InputNyaNew