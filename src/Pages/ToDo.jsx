import React, { useState } from 'react';
import Task from "../components/Task";

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");

    const addTask = () => {
        if (text.trim()) {
            const newTask = { id: Date.now(), text, status: 'not finished' };
            setTasks([...tasks, newTask]);
            setText("");
        }
    };

    const updateTask = (id, newText) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleStatus = (id) => {
        setTasks(tasks.map(task =>
            task.id === id
                ? { ...task, status: task.status === 'done' ? 'not finished' : 'done' }
                : task
        ));
    };

    return (
        <div className="container">
            <h1 className="header">To Do List</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="button" onClick={addTask}>Save</button>

            <ul>
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={deleteTask}
                        onUpdate={updateTask}
                        onToggleStatus={toggleStatus}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDo;
