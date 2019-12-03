import { USER } from './roles';
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

const getMembers = () => {
  const users = getUsers();
  const members = users.filter((user) => user.direction === USER);
  return members;
};

const checkData = (email, password) => {
  const users = getUsers();
  const user = users.find((user) => email === user.email);
  if (!user) {
    return 0;
  }
  return user.direction;
};

export { getUsers, checkData, getMembers };
