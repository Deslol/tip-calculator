export default function ReusableBtn({callbackFn, children}) {
    return <button onClick={callbackFn}>{children}</button>
}