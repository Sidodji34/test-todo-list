import { useState } from 'react';
import './App.css';
import Input from './components/mainInput';
import TaskForm from './components/taskForm';
import TaskContext from './context/taskContext';

function App() {
  const [task, setTask] = useState([]);

  return (
    <div className='App'>
      <div className='body_todo'>
        <div className='content'>
          <TaskContext.Provider value={{ task, setTask }}>
            <Input />
            <ul>
              {task &&
                task.map((item) => {
                  return <TaskForm key={item.id} props={item} />;
                })}
            </ul>
          </TaskContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
