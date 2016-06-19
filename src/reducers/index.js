import { combineReducers } from 'redux';
import userReducer from './userReducer';
import publicCourseReducer from './publicCourseReducer';
import routes from './routes';

const rootReducer = combineReducers({
  user: userReducer,
  publicCourse: publicCourseReducer,
  routes,
});

export default rootReducer;
