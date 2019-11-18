const getDate = (date) => {
  const curr_date = date.getDate();

  const curr_month = date.getMonth() + 1;
  const curr_year = date.getFullYear();
  const curr_hours = date.getHours();
  let curr_minutes = date.getMinutes();

  if (curr_minutes < 10) curr_minutes = '0' + curr_minutes;
  if (curr_hours < 10) curr_minutes = '0' + curr_hours;
  if (curr_month < 10) curr_minutes = '0' + curr_month;

  return `${curr_hours}:${curr_minutes} ${curr_date}-${curr_month}-${curr_year}`;
};

export default getDate;
