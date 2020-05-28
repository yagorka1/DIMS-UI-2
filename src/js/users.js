import { USER } from './roles';
const getUsers = () => {
  // const a = { email: 'aaa', password: '123', direction: 'Admin' };
  // const b = JSON.stringify(a);
  // localStorage.setItem('user_1', b)
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
  return !user ? 0 : user.direction;
};

export { getUsers, checkData, getMembers };
