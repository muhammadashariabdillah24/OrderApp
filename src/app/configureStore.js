import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import dataReducer from '../features/data/dataSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  data: dataReducer,
});

export default configureStore({
  reducer: rootReducer,
});
