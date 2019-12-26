import { tracksAPI } from '../api/tracks-api';
import getId from '../js/getId';
const SET_TRACK = 'SET_TRACK';
const CHANGE_TRACK = 'CHANGE_TRACK';
const SHOW_EDIT_FIELD = 'SHOW_EDIT_FIELD';
const PUSH_TRACK = 'PUSH_TRACK';

let initialState = {
  tracks: [{ trackId: 1 }],
  newTrack: '',
};

const tracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACK: {
      return { ...state, tracks: action.tracks };
    }
    case CHANGE_TRACK: {
      return {
        ...state,
        newTrack: action.newTrack,
      };
    }
    case PUSH_TRACK: {
      // const { newTrack } = this.state;
      const track = {
        taskId: action.taskId,
        userId: 'edede',
        trackId: getId(),
        taskName: action.taskTitle,
        trackNode: state.newTrack,
        trackDate: new Date(),
      };

      // console.log('state')
      // console.log(state)
      const { tracks } = state;
      console.log('state');
      console.log(state);
      return { ...state, tracks: [...tracks, track] };
    }
    // case CHOOSE_COLOR: {
    //   return {
    //     ...state,
    //     tasks: state.tasks.map((task) => {
    //       if (task.taskId === action.id) {
    //         return {
    //           ...task,
    //           backgroundColorPost: action.color,
    //           chooseColorField: false,
    //         };
    //       }
    //       return task;
    //     }),
    //   };
    // }
    // case PUSH_STATUS_LOADING: {
    //   return {
    //     ...state,
    //     loadingInProgress: action.status,
    //   };
    // }
    default:
      return state;
  }
};

export const setTracks = (tracks) => ({ type: SET_TRACK, tracks });
// export const deleteTask = (id) => ({ type: DELETE_TASK, id });
export const changeTrack = (newTrack) => ({ type: CHANGE_TRACK, newTrack });
export const pushTrack = (taskId, taskTitle) => ({
  type: PUSH_TRACK,
  taskId,
  taskTitle,
});
// export const chooseColor = (id, color) => ({ type: CHOOSE_COLOR, id, color });
// export const isDataFetching = (status) => ({
//   type: PUSH_STATUS_LOADING,
//   status,
// });

export const showEditField = (id, name) => ({
  type: SHOW_EDIT_FIELD,
  id,
  name,
});

export const getAllTracks = () => {
  return (dispatch) => {
    // dispatch(isDataFetching(true));
    tracksAPI.getAllTracks().then((response) => {
      // dispatch(isDataFetching(false));
      dispatch(setTracks(response));
    });
  };
};

export default tracksReducer;
