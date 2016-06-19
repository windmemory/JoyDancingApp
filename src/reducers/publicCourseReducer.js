import { UPDATE_COURSE } from '../actions/publicCourseActions';

const initialState = {
  courses: [
    '111',
    '222',
  ],
  lastUpdated: Date.now()
}

const publicCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COURSE:
      return Object.assign({}, state, {courses: action.payload});
    default:
      return state;
  }
}

export default publicCourseReducer;
