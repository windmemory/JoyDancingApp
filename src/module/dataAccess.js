// import Parse from 'parse/react-native';
import { applicationId, serverURL } from '../appConfig';

// Parse.initialize(applicationId);
// Parse.serverURL = serverURL;

// export const getCourses = () => {
//   let query = new Parse.Query("courses");
//   return query.find().then(courseList => {
//     return courseList.map(e => e.toJSON());
//   }).catch(error => {
//     console.log('Geting courses has errors');
//     console.log(error);
//   })
// }

export const getCourses = () => {
  return fetch(`${serverURL}/classes/courses`, {
    method: 'GET',
    headers: {
      'X-Parse-Application-Id': applicationId
    }
  }).then((response) => response.json())
  .catch(error => console.log(error))
}
