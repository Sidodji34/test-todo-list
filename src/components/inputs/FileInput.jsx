function FileInput({ setFiles, resetFilePath }) {
  const handleSubmit = (files) => {
    if (files.length > 1) {
      setFiles((prevState) => [...prevState].concat(files));
    } else {
      setFiles([...files]);
    }
  };

  return (
    <input
      className='input-form__file'
      type='file'
      ref={resetFilePath}
      onChange={(e) => handleSubmit([...e.target.files])}
      accept='image/*,.png,.jpg,.gif,.web'
      multiple
    />
  );
}

export default FileInput;
