export default function Summary({bill = 0, tip = 0}) {
    const sum = bill + tip
    return <h2>You pay ${sum} (${bill} + ${tip} tip)</h2>
}