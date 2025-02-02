import React from 'react';
import '../App.css';
import { FcFullTrash } from "react-icons/fc";
function TodoItem({ task, deleteTask, toggleCompleted }) {
    function handleChange() {
        console.log(task.id);
        toggleCompleted(task.id);
    }
    return (
        <div className="todo-item">
            <input type="checkbox"
                checked={task.completed}
                onChange={handleChange}
            />
            <p>{task.text}</p>
            <button onClick={() => deleteTask(task.id)}>
                <FcFullTrash
                    size={24} />
            </button>
        </div>
    );
}
export default TodoItem;
