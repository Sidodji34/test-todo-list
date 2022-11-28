function TitleInput({ title, setTitle, setError }) {
  return (
    <input
      className='input-form__title'
      type='text'
      placeholder='Task title...'
      onFocus={() => setError(false)}
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
}
export default TitleInput;
