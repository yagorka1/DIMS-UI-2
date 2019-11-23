const getUsers = () => {
  const users = [];
  for (let i = 0; i < localStorage.length; i++) {
    users.push(JSON.parse(localStorage.getItem(i)));
  }

  return users;
};

export default getUsers;
