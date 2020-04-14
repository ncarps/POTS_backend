import moment from 'moment';
export const compareDate = (currentDate, filterDate, filterTo) => {
  if (
    (moment(currentDate).isAfter(filterDate) &&
      moment(currentDate).isBefore(filterTo)) ||
    moment(currentDate).isSame(filterDate) ||
    moment(currentDate).isSame(filterTo)
  ) {
    return true;
  }
  return false;
};
