const getUsers = () => {
  const users = [];
  for (let i = 0; i < localStorage.length; i++) {
    const storageId = localStorage.key(i);
    if (storageId.includes('user')) {
      const user = JSON.parse(localStorage.getItem(storageId));
      user.trackDate = new Date(user.trackDate);

      users.push(user);
    }
  }

  return users;
};

const checkData = (email, password) => {
  const users = getUsers();
  for (let i = 0; i < users.length; i++) {
    if (email === users[i].email) {
      return users[i].direction;
    }
  }
  return 0;
};

export { getUsers, checkData };
