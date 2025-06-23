import './App.css';
import TextAndInput from "../TextAndInput/TextAndInput";
import Summary from "../Summary/Summary";

function App() {
    return (
        <>
            <ul>
                <TextAndInput>How much was the bill?</TextAndInput>
                <TextAndInput>How did you like the service?</TextAndInput>
                <TextAndInput>How did your friend like the service?</TextAndInput>
            </ul>
            <Summary/>
        </>
    );
}

export default App;
