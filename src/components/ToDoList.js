import { useState } from 'react'
import TodoItem from './ToDoItem';
function ToDoList({ title }) {
    const [tasks, setTasks] = useState([{
        id: 1,
        text: 'Atividade',
        date: '02/02/2025',
        completed: true
    },
    {
        id: 2,
        text: 'Entrega versão 02 TCC',
        date: '05/02/2025',
        completed: false
    }
    ]);
    const [text, setText] = useState('');
    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }
    function deleteTask(id) {
        setTasks(tasks.filter(tasks => tasks.id != id));
    }
    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (tasks.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    }
    return (
        <div className="container">
            <h1> {title} </h1>
            <div className="todo-list">
                <div className="list-header">
                    <input value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button onClick={() => addTask(text)}>Add</button>
                </div>
                {tasks.map(task => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted}
                    />
                ))}
            </div>
        </div>
    );
}
export default ToDoList;