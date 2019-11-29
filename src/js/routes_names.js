// import statistics from '../assets/images/navbar/statistics.png';
import workflow from '../assets/images/navbar/workflow.png';
// import calendar from '../assets/images/navbar/calendar.png';
import users from '../assets/images/navbar/users.png';
import settings from '../assets/images/navbar/settings.png';
// import home from '../assets/images/navbar/home.png';
import { ADMIN, MENTOR, USER } from './roles';

const routesAdmin = [
  { title: '/workflow', image: workflow },
  { title: '/users', image: users },
  { title: '/tasks', image: settings },
  { title: '/courses', image: settings },
];

const routesMember = [
  { title: '/workflow', image: workflow },
  { title: '/tasks', image: settings },
  { title: '/tracks', image: settings },
];

const routesMentor = [
  { title: '/workflow', image: workflow },
  { title: '/users', image: users },
  { title: '/tasks', image: settings },
];

const getRotes = (direction) => {
  if (direction === ADMIN) return routesAdmin;
  if (direction === MENTOR) return routesMentor;
  if (direction === USER) return routesMember;
};

const getTitle = (title) => {
  title = title.slice(1, title.length);
  return title[0].toUpperCase() + title.slice(1);
};

export { getRotes, getTitle };
