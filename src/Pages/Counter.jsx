import React, {useState} from 'react';
import '../styles/Counter.css';
import Footer from "../components/Footer";

const Counter = () => {
    const[value, setValue] = useState(0);
    const[destroyed, setDestroyed] = useState(false);

    return (
        <div className={"container"}>
            <p className={"header"}>PLAY WITH NUMBERS</p>
            <div className={"buttonContainer"}>
                <button className={"button-33"} type={"button"} onClick={() => setValue(value + 1)}>+1</button>
                <button className={"button-68"} type={"button"} onClick={() => setValue(value - 1)}>-1</button>
            </div>
            <div className={"buttonContainer"}>
                <button className={"button-33"} type={"button"} onClick={() => setValue(value * 2)}>*2</button>
                <button className={"button-68"} type={"button"} onClick={() => setValue(value / 2)}>/2</button>
            </div>
            <div className={"buttonContainer"}>
                <span className={"num"}>{value}</span>
            </div>
            {!destroyed && (
                <div>
                    <div className={"buttonContainer"}>
                        <button className={"button-73"} type={"button"} onClick={() => setDestroyed(true)}>delete button
                            and text
                        </button>
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