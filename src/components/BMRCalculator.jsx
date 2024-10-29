import React, { useState } from 'react';
import '../styles/BMI.css';

const BMRCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [bmr, setBmr] = useState(null);

    const calculateBMR = () => {
        const s = gender === 'male' ? 5 : -161;
        const bmrValue = 10 * weight + 6.25 * height - 5 * age + s;
        setBmr(bmrValue);
    };

    return (
        <div className="div1">
            <h1 className="head">BMR Calculator</h1>
            <div className={"input-container"}>
                <input
                    type="number"
                    placeholder="Height (cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Weight (kg)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <select className={"sel"} value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <button onClick={calculateBMR}>Calculate BMR</button>

            {bmr && (
                <div style={{marginTop: '20px'}}>
                    <h2>Your BMR: {bmr} kcal/day</h2>
                </div>
            )}
        </div>
    );
};

export default BMRCalculator;

