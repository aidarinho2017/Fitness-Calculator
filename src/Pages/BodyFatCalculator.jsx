import React, { useState } from 'react';
import '../styles/BMI.css';

const BodyFatCalculator = () => {
    const [gender, setGender] = useState('male');
    const [waist, setWaist] = useState('');
    const [neck, setNeck] = useState('');
    const [height, setHeight] = useState('');
    const [hip, setHip] = useState(''); // Only for females
    const [bodyFat, setBodyFat] = useState(null);

    const calculateBodyFat = () => {
        const waistValue = parseFloat(waist);
        const neckValue = parseFloat(neck);
        const heightValue = parseFloat(height);
        const hipValue = parseFloat(hip);

        let bodyFatPercent;

        if (gender === 'male') {
            bodyFatPercent =
                495 / (1.0324 - 0.19077 * Math.log10(waistValue - neckValue)
                    + 0.15456 * Math.log10(heightValue)) - 450;
        } else {
            bodyFatPercent =
                495 / (1.29579 - 0.35004 * Math.log10(waistValue + hipValue - neckValue)
                    + 0.22100 * Math.log10(heightValue)) - 450;
        }

        setBodyFat(bodyFatPercent.toFixed(2));
    };

    return (
        <div className="div1">
            <h1 className="head">Body Fat Calculator</h1>
            <div className={"input-container"}>
                <input
                    type="number"
                    placeholder="Waist (cm)"
                    value={waist}
                    onChange={(e) => setWaist(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Neck (cm)"
                    value={neck}
                    onChange={(e) => setNeck(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Height (cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
                {gender === 'female' && (
                    <input
                        type="number"
                        placeholder="Hip (cm)"
                        value={hip}
                        onChange={(e) => setHip(e.target.value)}
                    />
                )}
                <select className={"sel"} value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <button onClick={calculateBodyFat}>Calculate Body Fat</button>

            {bodyFat && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Your Body Fat: {bodyFat}%</h2>
                </div>
            )}
        </div>
    );
};

export default BodyFatCalculator;

