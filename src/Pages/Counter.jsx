import React, {useState} from 'react';
import '../styles/Counter.css';
import Footer from "../components/Footer";

const Counter = () => {
    const[value, setValue] = useState(0);
    const[destroyed, setDestroyed] = useState(false);

    return (
        <div className={"container"}>
            <p className={"header"}>PLAY WITH NUMBERS</p>
            <div className={"habitContainer"}>
                <button className={"button-33"} type={"button"} onClick={() => setValue(value + 1)}>add</button>
                <button className={"button-52"} type={"button"} onClick={() => setValue(value - 1)}>sub</button>
            </div>
            <div className={"habitContainer"}>
                <span className={"num"}>{value}</span>
            </div>
            <div className={"habitContainer"}>
                <button className={"button-33"} type={"button"} onClick={() => setValue(value * 2)}>mult</button>
                <button className={"button-52"} type={"button"} onClick={() => setValue(value / 2)}>div</button>
            </div>
            { !destroyed && (
                <div>
                <div className={"habitContainer"}>
                    <button className={"button-73"} type={"button"} onClick={() => setDestroyed(true)}>delete button and text</button>
                </div>
                <p>disappearing text</p>
                </div>
            )


            }
            <Footer> </Footer>
        </div>

    );


};

export default Counter;