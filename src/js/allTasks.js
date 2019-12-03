const getAllTasks = () => {
  const tasks = [];

  for (let i = 0; i < localStorage.length; i++) {
    const storageId = localStorage.key(i);
    if (storageId.includes('task')) {
      const task = JSON.parse(localStorage.getItem(storageId));
      task.startDate = new Date(task.startDate);
      task.deadlineDate = new Date(task.deadlineDate);

      tasks.push(task);
    }
  }
  return tasks;
};

export { getAllTasks };
