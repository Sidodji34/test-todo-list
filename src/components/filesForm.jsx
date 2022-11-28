import removeFileIcon from '../icons/removeFileIcon.svg';

function FilesForm({ fileName, editTask, handleRemoveFile }) {
  return (
    <div className='task-form__files-body'>
      <div className='task-form__files-content'>
        <span>{fileName}</span>
      </div>
      <button
        className={
          editTask
            ? 'task-form__files-delite-button'
            : 'task-form__hide-element'
        }
        style={{ backgroundImage: `url(${removeFileIcon})` }}
        onClick={() => handleRemoveFile(fileName)}
      />
    </div>
  );
}

export default FilesForm;
