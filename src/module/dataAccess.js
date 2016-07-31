import { applicationId, serverURL } from '../appConfig';

export const getCourses = () => {
  return fetch(`${serverURL}/classes/courses`, {
    method: 'GET',
    headers: {
      'X-Parse-Application-Id': applicationId
    }
  }).then((response) => response.json())
  .catch(error => console.log(error))
}
