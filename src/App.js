// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import BMICalculator from "./components/BMICalculator";
import BMRCalculator from "./components/BMRCalculator";
import CalorieCalculator from "./components/CalorieCalculator";
import BodyFatCalculator from "./components/BodyFatCalculator";
import PaceCalculator from "./components/PaceCalculator";
import SyncFields from "./components/SyncFields";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<BMICalculator />} />
            <Route path="/bodyfat" element={<BodyFatCalculator />} />
            <Route path="/calorie" element={<CalorieCalculator />} />
            <Route path="/bmr" element={<BMRCalculator />} />
            <Route path="/pace" element={<PaceCalculator />} />
            <Route path={"/sync"} element={<SyncFields />} />
        </Routes>
      </Router>
  );
};

export default App;
