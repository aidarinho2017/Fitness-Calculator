import React, {useState} from 'react';
import '../styles/Circle.css';

const Circle = () => {
    const[color, setColor] = useState('black');
    const[textColor, setTextColor] = useState('white');
    const[size, setSize] = useState(50);
    const[target, setTarget] = useState('circle');
    const[lastEvent, setLastEvent] = useState("No event happened")

    const handleColorChange = (e) => {
        if (target === 'circle') {
            setColor(e.target.value);
        } else {
            setTextColor(e.target.value);
        }
    };

    return (
        <div className={"container"}>
            <h1 className={"header"}>Play with Circle</h1>
            <p className={"footy"}>Change the size of the circle</p>
            <div className="buttonContainer">
                <input className={"slider"}
                       type="range"
                       min="10"
                       max="200"
                       value={size}
                       onChange={(e) => setSize(e.target.value)}
                />
            </div>

            <div className="colorControls">
                <label>Choose Target:</label>
                <select className={"sel1"} value={target} onChange={(e) => setTarget(e.target.value)}>
                    <option value="circle">Circle Color</option>
                    <option value="text">Text Color</option>
                </select>

                <label>Enter Color:</label>
                <input
                    type="text"
                    placeholder="e.g., blue, #123456"
                    onChange={handleColorChange}
                />
            </div>

            <div
                className="circle"
                style={{
                    border: "2px solid black",
                    backgroundColor: color,
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: color
                }}
            >
                <p
                    style={{
                        color: textColor,
                        fontSize: `${size * 0.25}px`
                    }}>Text</p>
            </div>
            <div className={"footer"}>
                <input
                    aria-label="try copy/pasting"
                    placeholder={"TextField"}
                    onFocus={() => setLastEvent('onFocus')}
                    onBlur={() => setLastEvent('onBlur')}
                    onCopy={() => setLastEvent('onCopy')}
                    onCut={() => setLastEvent('onCut')}
                    onPaste={() => setLastEvent('onPaste')}
                    onKeyDown={() => setLastEvent('onKeyDown')}
                    onKeyUp={() => setLastEvent('onKeyUp')}
                />
                <pre className={"footy"}>last event: {lastEvent}</pre>
            </div>
        </div>
    );
};

export default Circle;