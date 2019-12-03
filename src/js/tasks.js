const getTasks = (email) => {
  const userTasks = [];
  for (let i = 0; i < localStorage.length; i++) {
    const storageId = localStorage.key(i);
    if (storageId.includes('task')) {
      if (email === JSON.parse(localStorage.getItem(storageId)).userId) {
        const task = JSON.parse(localStorage.getItem(storageId));
        task.startDate = new Date(task.startDate);
        task.deadlineDate = new Date(task.deadlineDate);

        userTasks.push(task);
      }
    }
  }
  return userTasks;
};

export default getTasks;
