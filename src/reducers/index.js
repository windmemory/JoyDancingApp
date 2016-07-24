import { combineReducers } from 'redux';
import userReducer from './userReducer';
import publicCourseReducer from './publicCourseReducer';
import learningCoursesReducer from './learningCoursesReducer';
import routes from './routes';

const rootReducer = combineReducers({
  user: userReducer,
  publicCourse: publicCourseReducer,
  learningCourses: learningCoursesReducer,
  routes,
});

export default rootReducer;
