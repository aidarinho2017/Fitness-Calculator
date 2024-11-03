import React, {useState} from 'react'
import '../styles/Habits.css';
const Habit = (habit) => {
    const[count, setCount] = useState(0);

    return (
        <div className={"habitContainer"}>
        <p>{habit.text}</p>
            <button className={"button-33"} onClick={() => setCount(count+1)}>count</button>
            <p>{count}</p>
        </div>

    )


}

export default Habit