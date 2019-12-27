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
      const track = {
        taskId: action.taskId,
        userId: action.userId,
        trackId: getId(),
        taskName: action.taskTitle,
        trackNode: state.newTrack,
        trackDate: new Date(),
      };

      const { tracks } = state;
      return { ...state, tracks: [...tracks, track] };
    }
    default:
      return state;
  }
};

export const setTracks = (tracks) => ({ type: SET_TRACK, tracks });

export const changeTrack = (newTrack) => ({ type: CHANGE_TRACK, newTrack });
export const pushTrack = (taskId, taskTitle, userId) => ({
  type: PUSH_TRACK,
  taskId,
  taskTitle,
  userId,
});

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
