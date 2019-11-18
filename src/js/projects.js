import { BLUE_COLOR } from './color';
const projects = [
  {
    taskId: String(
      Math.round(Math.random() * (100000000 + 10000000) - 10000000),
    ),
    title: 'First',
    description: 'First Description',
    startDate: new Date(1574050000000),
    deadlineDate: new Date(1574080000000),
    state: 'completed',
    showEditFields: false,

    priority: 'Medium',
    chooseColorField: false,
    backgroundColorPost: BLUE_COLOR,
    status: false,
    showEditField: false,
    showChangeTaskField: false,
    showTrackField: false,
  },
  {
    taskId: String(
      Math.round(Math.random() * (100000000 + 10000000) - 10000000),
    ),
    title: 'Second',
    description: 'Second Description',
    startDate: new Date(1574010000000),
    deadlineDate: new Date(1574090000000),
    state: 'inProgress',
    showEditFields: false,

    priority: 'Medium',
    chooseColorField: false,
    backgroundColorPost: BLUE_COLOR,
    status: false,
    showEditField: false,
    showChangeTaskField: false,
    showTrackField: false,
  },
  {
    taskId: String(
      Math.round(Math.random() * (100000000 + 10000000) - 10000000),
    ),
    title: 'Third',
    description: 'Third Description',
    startDate: new Date(1564190000000),
    deadlineDate: new Date(1574190000000),
    state: 'toDo',
    showEditFields: false,

    priority: 'Medium',
    chooseColorField: false,
    backgroundColorPost: BLUE_COLOR,
    status: false,
    showEditField: false,
    showChangeTaskField: false,
    showTrackField: false,
  },
  {
    taskId: String(
      Math.round(Math.random() * (100000000 + 10000000) - 10000000),
    ),
    title: 'Four',
    description: 'Four Description',
    startDate: new Date(1574440000000),
    deadlineDate: new Date(1574490000000),
    state: 'inProgress',
    showEditFields: false,

    priority: 'Medium',
    chooseColorField: false,
    backgroundColorPost: BLUE_COLOR,
    status: false,
    showEditField: false,
    showChangeTaskField: false,
    showTrackField: false,
  },
  {
    taskId: String(
      Math.round(Math.random() * (100000000 + 10000000) - 10000000),
    ),
    title: 'Five',
    description: 'Five Description',
    startDate: new Date(1574090000000),
    deadlineDate: new Date(1575090000000),
    state: 'toDo',
    showEditFields: false,

    priority: 'Medium',
    chooseColorField: false,
    backgroundColorPost: BLUE_COLOR,
    status: false,
    showEditField: false,
    showChangeTaskField: false,
    showTrackField: false,
  },
  {
    taskId: String(
      Math.round(Math.random() * (100000000 + 10000000) - 10000000),
    ),
    title: 'Six',
    description: 'Six Description',
    startDate: new Date(1573590000000),
    deadlineDate: new Date(1574590000000),
    state: 'completed',
    showEditFields: false,

    priority: 'Medium',
    chooseColorField: false,
    backgroundColorPost: BLUE_COLOR,
    status: false,
    showEditField: false,
    showChangeTaskField: false,
    showTrackField: false,
  },
];

export default projects;
