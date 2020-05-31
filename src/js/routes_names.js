import users from '../assets/images/navbar/users.png';
import settings from '../assets/images/navbar/settings.png';
import { ADMIN, MENTOR, USER } from './roles';

const routesAdmin = [
  { title: '/users', name: 'Пользователи', image: users },
  { title: '/tasks', name: 'Задачи', image: settings },
];

const routesMember = [
  { title: '/workflow', name: 'Статус задач', image: settings },
  { title: '/tasks', name: 'Задачи', image: settings },
  { title: '/tracks', name: 'Треки', image: settings },
  { title: '/statistics', name: 'Статистика', image: settings },
];

const routesMentor = [
  { title: '/users', name: 'Пользователи', image: users },
  { title: '/tasks', name: 'Задачи', image: settings },
  { title: '/statistics', name: 'Статистика', image: settings },
];

const getRotes = (direction) => {
  if (direction === ADMIN) {
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
