import './App.css';
import TextAndInput from "../TextAndInput/TextAndInput";
import Summary from "../Summary/Summary";
import ReusableBtn from "../ReusableBtn/ReusableBtn";

function App() {
    return (
        <>
            <div>
                <TextAndInput>How much was the bill?</TextAndInput>
                <TextAndInput>How did you like the service?</TextAndInput>
                <TextAndInput>How did your friend like the service?</TextAndInput>
            </div>
            <Summary/>
            <ReusableBtn>Reset</ReusableBtn>
        </>
    );
}

export default App;
