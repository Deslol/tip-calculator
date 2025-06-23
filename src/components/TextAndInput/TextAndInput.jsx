export default function TextAndInput({children, inputType}) {
    return (
        <li>
            <span>{children}</span>
            <input type={inputType}/>
        </li>)
}