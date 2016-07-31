import {
  ADD_COURSE_TO_LEARN,
  UPDATE_DOWNLOAD_PROGRESS,
  VIDEO_DOWNLOAD_FINISHED,
} from '../actions/learningCoursesActions';
import singleCourseReducer from './singleCourseReducer';

const learningCoursesReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_COURSE_TO_LEARN:
      if (!state.every((course) => course.objectId !== action.payload.objectId)) return state;
      return [
        ...state,
        singleCourseReducer(undefined, action),
      ]
    case UPDATE_DOWNLOAD_PROGRESS:
      return updateActionWithVideoID(state, action);
    case VIDEO_DOWNLOAD_FINISHED:
      return updateActionWithVideoID(state, action);
    default:
      return state;
  }
}

const updateActionPassAlong = (state, action, objectId) => [
  ...state.filter(course => course.objectId !== objectId),
  singleCourseReducer(state.filter(course => course.objectId === objectId)[0], action),
];
// Just put videoId directely in the payload, then this will process the action
const updateActionWithVideoID = (state, action) => {
  const objectId = action.payload.videoId.split('-')[0];
  return updateActionPassAlong(state, action, objectId);
}

export default learningCoursesReducer;
