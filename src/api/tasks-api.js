export const tasksAPI = {
  getAllTasks() {
    let promise = new Promise(function(resolve, reject) {
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
      setTimeout(() => resolve(tasks), 3000);
    });
    return promise;
  },
};
