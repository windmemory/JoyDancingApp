import { combineReducers } from 'redux';
import userReducer from './userReducer';
import publicCourseReducer from './publicCourseReducer';

export default rootReducer = () => {
  return combineReducers({
    user: userReducer,
    publicCourse: publicCourseReducer,
  });
}
