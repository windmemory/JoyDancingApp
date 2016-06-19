import { getCourses } from '../module/dataAccess';

const updateInterval = -1//5 * 60 * 1000;

export const UPDATE_COURSE = 'UPDATE_COURSE';
export const updateCourses = () => {
  return (dispatch, getState) => {
    console.log('updating courses');
    if (Date.now() - getState().publicCourse.lastUpdated > updateInterval){
      getCourses().then(newCourses => {
        dispatch({
          type: UPDATE_COURSE,
          payload: newCourses,
        })
      });
    }
  }
}
