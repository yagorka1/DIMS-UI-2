import { applyMiddleware, combineReducers, createStore } from 'redux';

import tasksReducer from './task-reducer';
import tracksReducer from './track-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  tasks: tasksReducer,
  tracks: tracksReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
