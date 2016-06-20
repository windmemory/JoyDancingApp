import { UPDATE_COURSE } from '../actions/publicCourseActions';

const initialState = {
  courses: [],
  lastUpdated: Date.now(),
}

const publicCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COURSE:
      return Object.assign({}, state, {courses: action.payload, lastUpdated: Date.now()});
    default:
      return state;
  }
}

export default publicCourseReducer;
