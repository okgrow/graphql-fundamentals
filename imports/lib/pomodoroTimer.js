import moment from 'moment';

const DURATION_AMT = 5;
const DURATION_UNITS = 'minutes';

const endTime = (pomodoro) =>
  moment(pomodoro.startDate).add(DURATION_AMT, DURATION_UNITS);

export const isActive = (pomodoro) => {
  const now = moment();
  return now.isBefore(endTime(pomodoro));
};

export const formatTime = (pomodoro) => {
  // format time nicely for completed pomodoros
  if (!isActive(pomodoro)) {
    return moment(pomodoro.startDate).format('h:mma, MMMM DD YYYY');
  }
  // display time left for active pomodoros
  const rawTimeLeft = endTime(pomodoro).diff();
  return moment(rawTimeLeft).format('mm:ss');
};
