import Parse from 'parse/react-native';
import { applicationId, serverURL } from '../appConfig';

Parse.initialize(applicationId);
Parse.serverURL = serverURL;

const GET_COURSES = 'GET_COURSES';
const getCourses = () => {
  return (dispatch, getState) => {
    Parse.Query.find()
  }
}
