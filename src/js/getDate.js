const getDate = (date) => {
  const curr_date = date.getDate();

  let curr_month = date.getMonth() + 1;
  const curr_year = date.getFullYear();
  let curr_hours = date.getHours();
  let curr_minutes = date.getMinutes();

  if (curr_minutes < 10) curr_minutes = '0' + curr_minutes;
  if (curr_hours < 10) curr_hours = '0' + curr_hours;
  if (curr_month < 10) curr_month = '0' + curr_month;

  return `${curr_hours}:${curr_minutes} ${curr_date}-${curr_month}-${curr_year}`;
};

const getDatePost = (date) => {
  return getDate(date).slice(6, date.length); // get date without time
};

export { getDate, getDatePost };
