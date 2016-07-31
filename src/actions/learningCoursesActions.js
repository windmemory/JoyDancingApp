import { downloadSingleVideo } from '../module/videoDownloader';

export const ADD_COURSE_TO_LEARN = 'ADD_COURSE_TO_LEARN';
export const addCourseToLearn = (course) => ({
  type: ADD_COURSE_TO_LEARN,
  payload: course,
})

export const DOWNLOAD_START = 'DOWNLOAD_START';
export const UPDATE_DOWNLOAD_PROGRESS = 'UPDATE_DOWNLOAD_PROGRESS';
export const VIDEO_DOWNLOAD_FINISHED = 'VIDEO_DOWNLOAD_FINISHED';
export const downloadVideo = (video) => {
  return (dispatch, getState) => {
    const downloadBegin = (beginResult) => dispatch({
      type: DOWNLOAD_START,
      payload: {
        jobId: beginResult.jobId,
        contentLength: beginResult.contentLength,
        statusCode: beginResult.statusCode,
        videoId: video.videoId,
      }
    })
    const updateProgress = (progressResult) => {
      dispatch({
        type: UPDATE_DOWNLOAD_PROGRESS,
        payload: {
          ...progressResult,
          videoId: video.videoId,
        }
      })
    };
    downloadSingleVideo(video, updateProgress, downloadBegin).then((result) => {
      dispatch({
        type: VIDEO_DOWNLOAD_FINISHED,
        payload: result
      })
    });
  }
}
