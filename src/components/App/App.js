import './App.css';
import TextAndInput from "../TextAndInput/TextAndInput";
import Summary from "../Summary/Summary";
import ReusableBtn from "../ReusableBtn/ReusableBtn";
import {useState} from "react";

function App() {
    const [bill, setBill] = useState(0)
    const [tip, setTip] = useState(0)

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

    return (
        <>
            <div>
                <TextAndInput>How much was the bill?</TextAndInput>
                <TextAndInput inputType="select" options={options}>How did you like the service?</TextAndInput>
                <TextAndInput inputType="select" options={options}>How did your friend like the service?</TextAndInput>
            </div>
            <Summary/>
            <ReusableBtn>Reset</ReusableBtn>
        </>
    );
}

export default App;
