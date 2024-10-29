// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Adjust the path if needed

const Home = () => {
    const calculators = [
        { name: 'BMI Calculator', path: '/bmi' },
        { name: 'Calorie Calculator', path: '/calorie' },
        { name: 'Body Fat Calculator', path: '/bodyfat' },
        { name: 'BMR Calculator', path: '/bmr' },
        { name: 'Pace Calculator', path: '/pace' },
    ];

    return (
        <div className="div">
            <h1 className="header">Fitness and Health Calculators</h1>
            <ul className="ul">
                {calculators.map((calc) => (
                    <li key={calc.name} className="li">
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
