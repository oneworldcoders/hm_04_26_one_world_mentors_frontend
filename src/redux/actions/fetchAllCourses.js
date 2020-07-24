import axios from "axios";
import { ALL_COURSES } from "./types";
import { baseUrl } from "./baseURL";


const token = localStorage.getItem('jwtToken');
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
};

export const fetchCourses = () => dispatch => {
  axios
    .get(`${baseUrl}/courses`, {headers})
    .then(res =>
      dispatch({
        type: ALL_COURSES,
        payload: res.data
      })
    )
    .catch(error => console.log(error));
};
