import { combineReducers } from 'redux';
import userReducer from './userReducer';
import publicCourseReducer from './publicCourseReducer';
import tabBarReducer from './tabBarReducer';

const rootReducer = combineReducers({
  user: userReducer,
  publicCourse: publicCourseReducer,
  tabBar: tabBarReducer,
});

export default rootReducer;
