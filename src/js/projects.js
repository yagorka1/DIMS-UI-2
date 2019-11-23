const getProjects = (email) => {
  const userProjects = [];
  for (let i = 0; i < localStorage.length; i++) {
    const storageId = 'task_' + i;

    if (localStorage.getItem(storageId) !== null) {
      if (email === JSON.parse(localStorage.getItem(storageId)).userId) {
        const project = JSON.parse(localStorage.getItem(storageId));
        project.startDate = new Date(project.startDate);
        project.deadlineDate = new Date(project.deadlineDate);

        userProjects.push(project);
      }
    }
  }
  return userProjects;
};

export default getProjects;
