import { useState, useContext } from 'react';
import doneIcon from '../icons/doneIcon.svg';
import TaskContext from '../context/taskContext';
import dayjs from 'dayjs';
import FilesForm from './filesForm';
import { useRef } from 'react';

function EditTaskForm({ props, setEditTask, editTask }) {
  const { task, setTask } = useContext(TaskContext);
  const [editTitle, setTitle] = useState(props.title);
  const [editText, setText] = useState(props.text);
  const [editDate, setDate] = useState(props.date);
  const [editFiles, setFiles] = useState(props.files);
  const [error, setError] = useState(false);
  const resetFilePath = useRef('');

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

  const handleRemoveFile = (fileName) => {
    setFiles(props.files.filter((item) => item.name !== fileName));
  };

  const handleAddFiles = (file) => {
    const newFile = [...editFiles].concat(file);
    setFiles([...newFile]);
  };

  return (
    <div className='task-content'>
      <div className='task-form'>
        <div className='task-form__title-body'>
          <input
            className='input-form__title'
            type='text'
            defaultValue={props.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            className='task-form__done-button'
            style={{ backgroundImage: `url(${doneIcon})` }}
            onClick={() => handleDone()}
          />
        </div>
        <textarea
          className='input-form__text'
          type='text'
          defaultValue={props.text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className='task-form__files'>
          {editFiles &&
            editFiles.map((item, index) => {
              return (
                <FilesForm
                  key={Date.now() + index}
                  fileName={item.name}
                  editTask={editTask}
                  handleRemoveFile={handleRemoveFile}
                />
              );
            })}
        </div>
        <div className='task-form__bottom'>
          <input
            type='date'
            min={dayjs(new Date()).format('YYYY-MM-DD')}
            defaultValue={props.date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            className='input-form__file'
            type='file'
            ref={resetFilePath}
            onChange={(e) => handleAddFiles([...e.target.files])}
            accept='image/*,.png,.jpg,.gif,.web'
          />
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

export default EditTaskForm;
