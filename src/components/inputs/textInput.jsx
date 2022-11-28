function TextInput({ text, setText, setError }) {
  return (
    <textarea
      className='input-form__text'
      type='text'
      placeholder='Task text...'
      onFocus={() => setError(false)}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
export default TextInput;
