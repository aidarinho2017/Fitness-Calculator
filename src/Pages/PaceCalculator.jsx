import React, { useState } from 'react';
import '../styles/BMI.css';

const PaceCalculator = () => {
    const [time, setTime] = useState(''); // Holds time in HH:MM:SS format
    const [distance, setDistance] = useState(null);
    const [setPace] = useState(null);
    const [message, setMessage] = useState('');

    // Convert HH:MM:SS to total minutes
    const getTotalMinutes = () => {
        const [hours, minutes, seconds] = time.split(':').map(Number); // Parse the time input
        return (hours || 0) * 60 + (minutes || 0) + (seconds || 0) / 60;
    };

    const calculatePace = () => {
        const totalMinutes = getTotalMinutes();
        if (totalMinutes === 0 || distance === 0) {
            setMessage('Please enter valid time and distance.');
            setPace(null);
            return;
        }

        const paceValue = (totalMinutes / distance).toFixed(2); // Pace in minutes per km
        setPace(paceValue);

        const paceMinutes = Math.floor(paceValue);
        const paceSeconds = Math.round((paceValue - paceMinutes) * 60);

        setMessage(`Your pace is ${paceMinutes} min ${paceSeconds} sec per km.`);
    };

    return (
        <div className="div1">
            <h1 className="head">Pace Calculator</h1>

            <input
                type="text"
                placeholder="HH:MM:SS"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="time-input"
            />

            <input
                type="number"
                placeholder="Distance (km)"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="time-input"
                style={{ marginTop: '10px' }}
            />

            <button onClick={calculatePace} style={{ marginTop: '15px' }}>
                Calculate Pace
            </button>

            {message && (
                <div style={{ marginTop: '20px' }}>
                    <h2>{message}</h2>
                </div>
            )}
        </div>
    );
};

export default PaceCalculator;
