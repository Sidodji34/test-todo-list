import dayjs from 'dayjs';

function DateInput({ date, setDate }) {
  return (
    <input
      type='date'
      min={dayjs(new Date()).format('YYYY-MM-DD')}
      value={date}
      onChange={(e) => setDate(e.target.value)}
    />
  );
}
export default DateInput;
