import { useState, useContext, useRef } from 'react';
import TaskContext from '../context/TaskContext';
import DateInput from './inputs/DateInput';
import TitleInput from './inputs/TitleInput';
import TextInput from './inputs/TextInput';
import FileInput from './inputs/FileInput';

function MainInput() {
  const { task, setTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(false);
  const resetFilePath = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && text && date) {
      const newTask = {
        title,
        text,
        date,
        status: 'TO-DO',
        id: Date.now(),
        files,
      };
      setTask([newTask, ...task]);
      setTitle('');
      setText('');
      setDate('');
      setFiles([]);
      resetFilePath.current.value = '';
    } else {
      setError(true);
    }
  };

  return (
    <form className='input' onFocus={() => setError(false)}>
      <TitleInput title={title} setTitle={setTitle} />
      <TextInput text={text} setText={setText} />
      <div className='input-form__bottom'>
        <FileInput setFiles={setFiles} resetFilePath={resetFilePath} />
        <DateInput date={date} setDate={setDate} />
      </div>
      {error && (
        <div className='input-form__error-message'>
          Please fill in all fields
        </div>
      )}
      <button
        type='submit'
        className='input-button__create-task'
        onClick={handleSubmit}
      >
        Create task
      </button>
    </form>
  );
}

export default MainInput;
