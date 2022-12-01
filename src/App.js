import { useState } from 'react';
import './App.css';
import MainInput from './components/MainInput';
import TaskView from './components/TaskView';
import TaskContext from './context/TaskContext';

function App() {
  const [task, setTask] = useState([]);

  return (
    <div className='App'>
      <div className='body_todo'>
        <div className='content'>
          <TaskContext.Provider value={{ task, setTask }}>
            <MainInput />
            <ul>
              {task &&
                task.map((item) => {
                  return <TaskView key={item.id} props={item} />;
                })}
            </ul>
          </TaskContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
