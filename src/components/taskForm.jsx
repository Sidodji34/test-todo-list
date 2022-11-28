import removeIcon from '../icons/removeIcon.svg';
import editIcon from '../icons/editIcon.svg';
import doneIcon from '../icons/doneIcon.svg';
import { useContext, useState } from 'react';
import TaskContext from '../context/taskContext';
import EditTaskForm from './editTaskForm';
import FilesForm from './filesForm';

function TaskForm({ props }) {
  const { task, setTask } = useContext(TaskContext);
  const [done, setDoneTask] = useState(false);
  const [editTask, setEditTask] = useState(false);

  const handleRemove = (taskId) => {
    setTask(task.filter((item) => item.id !== taskId));
  };

  const handleDone = (taskName) => {
    task.map((item) => {
      if (item.title === taskName) return (item.status = 'DONE');
    });
    setDoneTask(true);
  };

  return (
    <li>
      {editTask ? (
        <EditTaskForm
          key={props.title + props.id}
          props={props}
          setEditTask={setEditTask}
          editTask={editTask}
        />
      ) : (
        <div className='task-content'>
          <div className='task-form'>
            <div className='task-form__title-body'>
              <div className='task-form__title'>{props.title}</div>
              <div className='task-form__buttons'>
                <button
                  className={
                    done ? 'task-form__hide-element' : 'task-form__edit-button'
                  }
                  title='Edit task'
                  style={{ backgroundImage: `url(${editIcon})` }}
                  onClick={() => setEditTask(true)}
                />
                <button
                  onClick={() => handleRemove(props.id)}
                  className='task-form__remove-button'
                  title='Remove task'
                  style={{ backgroundImage: `url(${removeIcon})` }}
                />
              </div>
            </div>
            <div className='task-form__text'>{props.text}</div>
            <div className='task-form__files'>
              {props.files &&
                props.files.map((item, index) => {
                  return (
                    <FilesForm
                      key={Date.now() + index}
                      fileName={item.name}
                      editTask={editTask}
                    />
                  );
                })}
            </div>
            <div className='task-form__bottom'>
              <div className='task-form__date'>{props.date}</div>
              <span
                className={'task-form__status-' + (done ? 'done' : 'todo')}
                title={props.status}
              ></span>
              <button
                className='task-form__done-button'
                title='Done'
                style={{ backgroundImage: `url(${doneIcon})` }}
                onClick={() => handleDone(props.title)}
              />
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

export default TaskForm;
