// src/components/Home.js
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    const[darkMode, setDarkMode] = useState(true);
    const calculators = [
        { name: 'BMI Calculator', path: '/bmi' },
        { name: 'Calorie Calculator', path: '/calorie' },
        { name: 'Body Fat Calculator', path: '/bodyfat' },
        { name: 'BMR Calculator', path: '/bmr' },
        { name: 'Pace Calculator', path: '/pace' },
        { name: 'Practice Math', path: '/counter'},
        { name: 'Play with Circle', path: '/circle'},
        { name: 'Track your habits', path: '/habits'},
    ];

    return (
        <div className={`home-container ${darkMode ? 'dark' : 'light'}`}>
            <button
                className="toggle-button"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>

            <h1 className={`header ${darkMode ? 'dark' : 'light'}`}>Fitness and Health Calculators</h1>
            <ul className={`ul ${darkMode ? 'dark' : 'light'}`}>
                {calculators.map((calc) => (
                    <li key={calc.name} className={`li ${darkMode ? 'dark' : 'light'}`}>
                        <Link to={calc.path}>
                            {calc.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
