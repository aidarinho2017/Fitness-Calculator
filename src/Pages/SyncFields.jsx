import React, { useState } from 'react';
import '../styles/SyncFields.css'; // Import component-specific CSS

const SyncFields = () => {
    const [inputValue, setInputValue] = useState(''); // State for the first input field

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Update state with the first input field's value
    };

    return (
        <div className="syncfields-container">
            <div className="syncfields-input-box">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type something..."
                />
            </div>

            <div className="syncfields-output-box">
                <input
                    type="text"
                    value={inputValue} // Second field copies the first field's value
                    readOnly
                    placeholder="Copied text"
                />
            </div>
        </div>
    );
};

export default SyncFields;
