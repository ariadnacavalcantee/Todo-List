import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className='kanban'>
      <ToDoList title="To Do" />
    </div>
  );
}

export default App;
