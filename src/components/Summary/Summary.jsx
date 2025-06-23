export default function Summary({bill = 0, tipPercent = 0}) {
    const tip = Math.round(tipPercent * bill)
    const sum = Math.round(bill + tip)
    return <h2>You pay ${sum} (${bill} + ${tip} tip)</h2>
}