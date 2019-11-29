const getDeadlineStatus = (deadlineDate) => {
  const currentTime = new Date().getTime();
  let timeToDeadline = (deadlineDate.getTime() - currentTime) / 1000 / 60 / 60; // time to deadline in hours
  if (timeToDeadline > 0) return 1;
  return 0;
};

const getTime = (deadlineDate) => {
  const currentTime = new Date().getTime();
  let str = 'left';
  let timeToDeadline = (deadlineDate.getTime() - currentTime) / 1000 / 60 / 60; // time to deadline in hours

  if (timeToDeadline < 0) {
    str = 'delays';
    timeToDeadline = timeToDeadline * -1;
  }

  if (timeToDeadline < 24) return `${Math.floor(timeToDeadline)} hours ${str}`;
  timeToDeadline = timeToDeadline / 24;

  if (timeToDeadline < 30) return `${Math.floor(timeToDeadline)} days ${str}`;
  timeToDeadline = timeToDeadline / 30;

  if (timeToDeadline < 12) return `${Math.floor(timeToDeadline)} months ${str}`;
  timeToDeadline = timeToDeadline / 12;

  return `${Math.floor(timeToDeadline)} years ${str}`;
};

export { getDeadlineStatus, getTime };
