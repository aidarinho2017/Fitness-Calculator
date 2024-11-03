import React, { useState } from 'react';
import '../styles/ToDo.css';

const Task = ({ task, onDelete, onUpdate, onToggleStatus }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleSave = () => {
        onUpdate(task.id, newText);
        setIsEditing(false);
    };

    return (
        <li className={`task ${task.status}`}>
            <button className={"button-68"} onClick={() => onToggleStatus(task.id)}>
                {task.status === 'done' ? 'Mark as Not Finished' : 'Mark as Done'}
            </button>
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                <span style={{textDecoration: task.status === 'done' ? 'line-through' : 'none'}}>
                    {task.text}
                </span>
            )}

            {isEditing ? (
                <button className={"button-68"} onClick={handleSave}>Save</button>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
            <button className={"button-78"} onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
};

export default Task;
