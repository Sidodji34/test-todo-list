import { useState, useContext } from 'react';
import doneIcon from '../icons/doneIcon.svg';
import TaskContext from '../context/TaskContext';
import FilesView from './FilesView';
import TitleInput from './inputs/TitleInput';
import TextInput from './inputs/TextInput';
import DateInput from './inputs/DateInput';
import FileInput from './inputs/FileInput';

function EditTask({ props, setEditTask, editTask }) {
  const { task, setTask } = useContext(TaskContext);
  const [editTitle, setTitle] = useState(props.title);
  const [editText, setText] = useState(props.text);
  const [editDate, setDate] = useState(props.date);
  const [editFiles, setFiles] = useState(props.files);
  const [error, setError] = useState(false);

  const handleDone = () => {
    if (editTitle && editDate && editText) {
      const newList = task.map((item) => {
        if (item.id === props.id) {
          return {
            ...item,
            title: editTitle,
            text: editText,
            date: editDate,
            files: editFiles,
          };
        } else {
          return item;
        }
      });
      setTask(newList);
      setEditTask(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className='task-content'>
      <div className='task-form'>
        <div className='task-form__title-body'>
          <TitleInput title={editTitle} setTitle={setTitle} />
          <button
            className='task-form__done-button'
            style={{ backgroundImage: `url(${doneIcon})` }}
            onClick={() => handleDone()}
          />
        </div>
        <TextInput text={editText} setText={setText} />
        <div className='task-form__files'>
          {editFiles &&
            editFiles.map((item, index) => {
              return (
                <FilesView
                  key={Date.now() + index}
                  fileName={item.name}
                  editTask={editTask}
                  editFiles={editFiles}
                  setFiles={setFiles}
                />
              );
            })}
        </div>
        <div className='task-form__bottom'>
          <DateInput date={editDate} setDate={setDate} />
          <FileInput setFiles={setFiles} />
        </div>
        {error && (
          <div className='input-form__error-message'>
            Please fill in all fields
          </div>
        )}
      </div>
    </div>
  );
}

export default EditTask;
