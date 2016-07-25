import { downloadSingleVideo } from '../module/videoDownloader';

export const ADD_COURSE_TO_LEARN = 'ADD_COURSE_TO_LEARN';
export const addCourseToLearn = (course) => ({
  type: ADD_COURSE_TO_LEARN,
  payload: course,
})

export const downloadVideo = (video, progressCallback) => {
  return (dispatch, getState) => {
    downloadSingleVideo(video, progressCallback).then((results) => {
      
    });
  }
}
