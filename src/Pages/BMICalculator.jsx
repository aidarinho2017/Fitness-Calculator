// src/components/BMICalculator.js
import React, { useState } from 'react';
import '../styles/BMI.css';

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [message, setMessage] = useState('');

    const calculateBMI = () => {
        const heightInMeters = height / 100;
        const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(bmiValue);

        if (bmiValue < 18.5) {
            setMessage('You are underweight.');
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            setMessage('You have a normal weight.');
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            setMessage('You are overweight.');
        } else {
            setMessage('You are obese.');
        }
    };

    return (
        <div className={"div1"}>
            <h1 className={"head"}>BMI Calculator</h1>
            <div className={"input-container"}>
                <input
                    type="number"
                    placeholder="Height (cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    style={{padding: '5px'}}
                />
                <input
                    type="number"
                    placeholder="Weight (kg)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    style={{marginRight: '10px', padding: '5px'}}
                />
            </div>
            <button onClick={calculateBMI} style={{marginTop: '10px', padding: '10px 20px'}}>
                Calculate BMI
            </button>

            {bmi && (
                <div style={{marginTop: '20px'}}>
                    <h2>Your BMI is: {bmi}</h2>
                    <p>{message}</p>
                </div>
            )}
        </div>
    );
};

export default BMICalculator;
