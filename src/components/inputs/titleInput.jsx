function TitleInput({ title, setTitle }) {
  return (
    <input
      className='input-form__title'
      type='text'
      placeholder='Task title...'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
}
export default TitleInput;
