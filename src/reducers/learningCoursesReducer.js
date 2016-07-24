import { ADD_COURSE_TO_LEARN } from '../actions/learningCoursesActions';

const learningCoursesReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_COURSE_TO_LEARN:
      if (!state.every((course) => course.objectId !== action.payload.objectId)) return state; 
      return [
        ...state,
        {
          ...action.payload,
          videos: action.payload.videos.map(video => ({
            ...video,
            downloaded: false,
            played: false,
          })),
          timestamp: Date.now(),
        }
      ]
    default:
      return state;
  }
}

export default learningCoursesReducer;
