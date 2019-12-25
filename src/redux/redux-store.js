import { applyMiddleware, combineReducers, createStore } from 'redux';

import tasksReducer from './task-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  tasks: tasksReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
