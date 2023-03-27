import React, { useState } from "react";

import classes from './Input.module.css';

const Input = (props) => {
    const [errorInput, setErrorInput] = useState(false);
    
    let handleChangeInput = (event) => {
        props.setInputField(event.target.value);
        if ((event.target.value.length !== 0)) {
            setErrorInput(false);
        }
    }

    return (
        <>
            <label className={props.label}>
                {props.text}:
                <input
                    type="text"
                    id={props.id}
                    name={props.id}
                    className={classes.inputName}
                    value={props.inputField}
                    onChange={handleChangeInput}
                />
            </label>
            {errorInput && <p className={classes.error}>Error, you must write a {props.text}.</p>}
        </>
    );
}

export default Input;
