import {
  ADD_COURSE_TO_LEARN,
  UPDATE_DOWNLOAD_PROGRESS,
  VIDEO_DOWNLOAD_FINISHED,
} from '../actions/learningCoursesActions';
import singleVideoReducer from './singleVideoReducer';

const singleCourseReducer = (state, action) => {
  switch(action.type) {
    case ADD_COURSE_TO_LEARN:
      return {
        ...action.payload,
        videos: action.payload.videos.map((video, index) => ({
          ...video,
          videoId: `${action.payload.objectId}-${index}`,
          downloadProgress: -1,
          playProgress: 0.0,
        })),
        timestamp: Date.now(),
      }
    case UPDATE_DOWNLOAD_PROGRESS:
      return updateVideosWithVideoID(state, action);
    case VIDEO_DOWNLOAD_FINISHED:
      return updateVideosWithVideoID(state, action);
    default:
      return state;
  }
}
// This need the videoId to be directely accessible in action payload
const updateVideosWithVideoID = (state, action) => ({
  ...state,
  videos: state.videos.map(video => singleVideoReducer(video, action)),
})

export default singleCourseReducer;
