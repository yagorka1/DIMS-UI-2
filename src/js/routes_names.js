import users from '../assets/images/navbar/users.png';
import settings from '../assets/images/navbar/settings.png';
import { ADMIN, MENTOR, USER } from './roles';

const routesAdmin = [
  { title: '/users', image: users },
  { title: '/tasks', image: settings },
];

const routesMember = [
  { title: '/workflow', image: settings },
  { title: '/tasks', image: settings },
  { title: '/tracks', image: settings },
];

const routesMentor = [
  { title: '/users', image: users },
  { title: '/tasks', image: settings },
];

const getRotes = (direction) => {
  if (direction === ADMIN) {
    debugger;
    return routesAdmin;
  }
  if (direction === MENTOR) {
    return routesMentor;
  }
  if (direction === USER) {
    return routesMember;
  }
};

const getTitle = (title) => {
  title = title.slice(1, title.length);
  return title[0].toUpperCase() + title.slice(1);
};

export { getRotes, getTitle };
