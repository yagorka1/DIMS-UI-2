import { tasksAPI } from '../api/tasks-api';
const SET_TASKS = 'SET_TASKS';
const DELETE_TASK = 'DELETE_TASK';
const SHOW_EDIT_FIELD = 'SHOW_EDIT_FIELD';
const ON_CHANGE = 'ON_CHANGE';
const PUSH_EDIT_TASK = 'PUSH_EDIT_TASK';
const CHOOSE_COLOR = 'CHOOSE_COLOR';
const PUSH_STATUS_LOADING = 'PUSH_STATUS_LOADING';

let initialState = {
  tasks: [{ taskId: 1 }],
  newTask: '',
  newTrack: '',
  loadingInProgress: false,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS: {
      return { ...state, tasks: action.tasks };
    }
    case DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.taskId !== action.id),
      };
    }
    case SHOW_EDIT_FIELD: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.taskId === action.id) {
            if (task[action.name]) {
              return { ...task, [action.name]: false };
            } else {
              return { ...task, [action.name]: true };
            }
          }
          return task;
        }),
      };
    }
    case ON_CHANGE: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case PUSH_EDIT_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.taskId === action.id) {
            return {
              ...task,
              description: state.newTask,
              showChangeTaskField: false,
            };
          }
          return task;
        }),
      };
    }
    case CHOOSE_COLOR: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.taskId === action.id) {
            return {
              ...task,
              backgroundColorPost: action.color,
              chooseColorField: false,
            };
          }
          return task;
        }),
      };
    }
    case PUSH_STATUS_LOADING: {
      return {
        ...state,
        loadingInProgress: action.status,
      };
    }
    default:
      return state;
  }
};

export const setTasks = (tasks) => ({ type: SET_TASKS, tasks });
export const deleteTaskAction = (id) => ({ type: DELETE_TASK, id });
export const changeTask = (name, value) => ({ type: ON_CHANGE, name, value });
export const pushEditTaskAction = (id) => ({ type: PUSH_EDIT_TASK, id });
export const chooseColor = (id, color) => ({ type: CHOOSE_COLOR, id, color });
export const isDataFetching = (status) => ({
  type: PUSH_STATUS_LOADING,
  status,
});

export const showEditField = (id, name) => ({
  type: SHOW_EDIT_FIELD,
  id,
  name,
});

export const getAllTasks = () => {
  return (dispatch) => {
    dispatch(isDataFetching(true));
    tasksAPI.getAllTasks().then((response) => {
      dispatch(isDataFetching(false));
      dispatch(setTasks(response));
    });
  };
};

export const deleteTask = (id) => {
  return (dispatch) => {
    dispatch(deleteTaskAction(id));
    //tasksAPI.deleteDataFromStorage(id, 'taskId');
  };
};

export const pushEditTask = (id) => {
  return (dispatch) => {
    dispatch(pushEditTaskAction(id));
    // alert(state.newTask);
    tasksAPI.deleteDataFromStorage(id, 'taskId');
  };
};

export default tasksReducer;
