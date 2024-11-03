import React, { useState } from 'react';
import '../styles/BMI.css';

const CalorieCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [calories, setCalories] = useState(null);

    const calculateCalories = () => {
        const s = gender === 'male' ? 5 : -161;
        const bmr = 10 * weight + 6.25 * height - 5 * age + s;
        setCalories(bmr);
    };

    return (
        <div className="div1">
            <h1 className="head">Calorie Calculator</h1>
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
            <button onClick={calculateCalories}>Calculate Calories</button>

            {calories && (
                <div style={{marginTop: '20px'}}>
                    <h2>Your BMR: {calories} kcal/day</h2>
                </div>
            )}
        </div>
    );
};

export default CalorieCalculator;
