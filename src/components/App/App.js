import './App.css';
import TextAndInput from "../TextAndInput/TextAndInput";
import Summary from "../Summary/Summary";
import ReusableBtn from "../ReusableBtn/ReusableBtn";
import {useState} from "react";

function App() {
    const [bill, setBill] = useState(0)
    const [myTipPercent, setMyTipPercent] = useState(0)
    const [friendTipPercent, setFriendTipPercent] = useState(0)

    const tipTotalPercent = myTipPercent + friendTipPercent

    const options = [
        {
            text: 'Dissatisfied',
            percent: 0
        },
        {
            text: 'It was okay',
            percent: 0.05
        },
        {
            text: 'It was good',
            percent: 0.1
        },
        {
            text: 'Absolutely Amazing!',
            percent: 0.2
        },
    ]

    function handleReset() {
        setBill(0);
        setMyTipPercent(0);
        setFriendTipPercent(0);
    }

    function handleMyTipSelection(input) {
        setMyTipPercent(input)
    }

    function handleFriendTipSelection(input) {
        setFriendTipPercent(input)
    }

    function handleBillInput(input) {
        setBill(input)
    }

    return (
        <>
            <div>
                <TextAndInput inputType='number' callbackFn={handleBillInput} value={bill}>
                    <span>How much was the bill?</span>
                </TextAndInput>
                <TextAndInput inputType="select" options={options} callbackFn={handleMyTipSelection}
                              value={myTipPercent}>
                    <span>How did you like the service?</span>
                </TextAndInput>
                <TextAndInput inputType="select" options={options} callbackFn={handleFriendTipSelection}
                              value={friendTipPercent}>
                    <span>How did your friend like the service? </span>
                </TextAndInput>
            </div>
            <Summary bill={bill} tipPercent={tipTotalPercent}/>
            <ReusableBtn callbackFn={handleReset}>Reset</ReusableBtn>
        </>
    );
}

export default App;
