import { combineReducers } from 'redux';
import userReducer from './userReducer';
import publicCourseReducer from './publicCourseReducer';
import learningCoursesReducer from './learningCoursesReducer';
import downloadReducer from './downloadReducer';
import routes from './routes';

const rootReducer = combineReducers({
  user: userReducer,
  publicCourse: publicCourseReducer,
  learningCourses: learningCoursesReducer,
  downloadManager: downloadReducer,
  routes,
});

export default rootReducer;
