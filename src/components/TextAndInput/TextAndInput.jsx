import styles from './TextAndInput.module.css'

export default function TextAndInput({children, inputType, options = []}) {
    return (
        <div className={styles.inputContainer}>
            <p>{children}</p>
            {inputType === "select" ?
                <select>{options.map(option => <option
                    value={option.percent}>{option.text} ({option.percent * 100}%)</option>)}</select> :
                <input type={inputType}/>}
        </div>)
}