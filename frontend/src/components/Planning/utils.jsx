export const getDaysInMonth = (date) => {
  const days = [];
  const year = date.getFullYear();
  const month = date.getMonth();
  const numDays = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= numDays; day++) {
    days.push(day);
  }

  return days;
};
