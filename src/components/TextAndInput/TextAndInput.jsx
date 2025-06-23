import styles from './TextAndInput.module.css'

export default function TextAndInput({children, inputType, options = [], callbackFn, value}) {
    return (
        <div className={styles.inputContainer}>
            <p>{children}</p>
            {inputType === "select" ?
                <select onChange={(e) => callbackFn(Number(e.target.value))} value={value}>
                    {options.map((option, i) =>
                        <option
                            key={i}
                            value={option.percent}
                        >
                            {option.text} ({option.percent * 100}%)</option>)}
                </select> :
                <input type={inputType} value={value} onChange={(e) => callbackFn(Number(e.target.value))}/>}
        </div>)
}