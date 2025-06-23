import styles from './TextAndInput.module.css'
export default function TextAndInput({children, inputType}) {
    return (
        <div className={styles.inputContainer}>
            <p>{children}</p>
            <input type={inputType}/>
        </div>)
}