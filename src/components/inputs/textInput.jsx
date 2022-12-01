function TextInput({ text, setText }) {
  return (
    <textarea
      className='input-form__text'
      type='text'
      placeholder='Task text...'
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
export default TextInput;
