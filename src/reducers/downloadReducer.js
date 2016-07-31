const initialState = [];

const publicCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_START:
      const newItem = {
        ...action.payload,
        
      }
      return Object.assign({}, state, {courses: action.payload, lastUpdated: Date.now()});
    default:
      return state;
  }
}
