const getUsers = () => {
  const users = [];
  for (let i = 0; i < localStorage.length; i++) {
    const storageId = 'user_' + i;
    if (JSON.parse(localStorage.getItem(storageId)) !== null)
      users.push(JSON.parse(localStorage.getItem(storageId)));
  }

  return users;
};

const checkData = (email, password) => {
  const users = getUsers();
  for (let i = 0; i < users.length; i++) {
    if (email === users[i].email) {
      return email;
    }
  }
  return 0;
};

export { getUsers, checkData };
