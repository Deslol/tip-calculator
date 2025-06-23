import styles from './TextAndInput.module.css'
import {useState} from "react";

export default function TextAndInput({children, inputType, options = [], callbackFn}) {
    return (
        <div className={styles.inputContainer}>
            <p>{children}</p>
            {inputType === "select" ?
                <select onChange={(e) => callbackFn(Number(e.target.value))}>
                    {options.map((option, i) =>
                        <option
                            key={i}
                            value={option.percent}
                        >
                            {option.text} ({option.percent * 100}%)</option>)}
                </select> :
                <input type={inputType} onChange={(e) => callbackFn(Number(e.target.value))}/>}
        </div>)
}