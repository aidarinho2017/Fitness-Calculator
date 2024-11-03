import React, {useState} from 'react'
import Habit from "../components/Habit";
import Footer from "../components/Footer";
import '../styles/Habits.css';

const Habits = () => {
    const[text, setText] = useState("");
    const[habits, setHabits] = useState([]);

    const addHabit = () => {
        if (text.trim()) {
            const newHabit = { id: Date.now(), text };
            setHabits([...habits, newHabit]);
            setText("");
        }
    }

    return (
        <div className="tracker-container">
            <h1 className="tracker-title">Habits Tracker</h1>
            <div className="input-container">
                <input
                    type="text"
                    className="habit-input"
                    value={text}
                    placeholder="Add a new habit"
                    onChange={(e) => setText(e.target.value)}
                />
                <button className="save-button" onClick={addHabit}>Save</button>
            </div>
            <div className="habits-list-container">
                <ul className="habits-list">
                    {habits.map((habit, index) => (
                        <Habit key={index} text={habit.text}/>
                    ))}
                </ul>
            </div>
            <Footer/>
        </div>
    );

}

export default Habits