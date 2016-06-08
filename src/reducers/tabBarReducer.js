import { SELETE_TAB } from '../actions/tabBarActions';

const tabBarReducer = (state = {
  selected: '教学课程'
}, action) => {
  switch(action.type) {
    case SELETE_TAB:
      return { selected: action.payload }
    default:
      return state;
  }
}

export default tabBarReducer;
