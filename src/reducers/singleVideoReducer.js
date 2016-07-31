import {
  UPDATE_DOWNLOAD_PROGRESS,
  VIDEO_DOWNLOAD_FINISHED,
} from '../actions/learningCoursesActions';

const singleVideoReducer = (state, action) => {
  switch(action.type) {
    case UPDATE_DOWNLOAD_PROGRESS:
      if (state.videoId === action.payload.videoId) {
        const progress = (action.payload.bytesWritten / action.payload.contentLength).toFixed(2);
        return Object.assign({}, state, { downloadProgress: progress})
      } else {
        return state;
      }
    case VIDEO_DOWNLOAD_FINISHED:
      if (state.videoId === action.payload.videoId) {
        return Object.assign({}, state, { localFilePath: action.payload.filePath});
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default singleVideoReducer;
