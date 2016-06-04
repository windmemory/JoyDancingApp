import { GET_COURSES } from '../actions/publicCourseActions';

const publicCourseReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_COURSES:
      return state;
    default:
      return state;
  }
}
