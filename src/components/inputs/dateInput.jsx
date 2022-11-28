import dayjs from 'dayjs';

function DateInput({ date, setDate, setError, defaultValue }) {
  return (
    <input
      type='date'
      onFocus={() => setError(false)}
      min={dayjs(new Date()).format('YYYY-MM-DD')}
      value={date}
      defaultValue={defaultValue}
      onChange={(e) => setDate(e.target.value)}
    />
  );
}
export default DateInput;
