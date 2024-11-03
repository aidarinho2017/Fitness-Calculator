// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import BMICalculator from "./Pages/BMICalculator";
import BMRCalculator from "./Pages/BMRCalculator";
import CalorieCalculator from "./Pages/CalorieCalculator";
import BodyFatCalculator from "./Pages/BodyFatCalculator";
import PaceCalculator from "./Pages/PaceCalculator";
import SyncFields from "./Pages/SyncFields";
import Counter from "./Pages/Counter";
import Circle from "./Pages/Circle";
import ToDo from "./Pages/ToDo";
import Habits from "./Pages/Habits";

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
            <Route path={"/counter"} element={<Counter/>} />
            <Route path={"/circle"} element={<Circle/>} />
            <Route path={"/todo"} element={<ToDo/>} />
            <Route path={"/habits"} element={<Habits/>} />
        </Routes>
      </Router>
  );
};

export default App;
