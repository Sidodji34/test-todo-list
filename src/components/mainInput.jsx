import { useState, useContext, useRef } from 'react';
import TaskContext from '../context/taskContext';
import DateInput from './inputs/dateInput';
import TitleInput from './inputs/titleInput';
import TextInput from './inputs/textInput';

function Input() {
  const { task, setTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(false);
  const resetFilePath = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    resetFilePath.current.value = '';
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
    } else {
      setError(true);
    }
  };

  return (
    <form className='input'>
      <TitleInput title={title} setTitle={setTitle} setError={setError} />
      <TextInput text={text} setText={setText} setError={setError} />
      <div className='input-form__bottom'>
        <input
          className='input-form__file'
          type='file'
          ref={resetFilePath}
          onChange={(e) => setFiles([...e.target.files])}
          accept='image/*,.png,.jpg,.gif,.web'
        />
        <DateInput date={date} setDate={setDate} setError={setError} />
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

export default Input;
