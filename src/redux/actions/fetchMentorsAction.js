import axios from "axios";
import { FETCH_MENTORS } from "./types";

const baseUrl = "https://owc-mentor-backend.herokuapp.com/mentors";

export const fetchMentors = () => dispatch => {
  axios
    .get(`${baseUrl}`)
    .then(res =>
      dispatch({
        type: FETCH_MENTORS,
        payload: res.data
      })
    )
    .catch(error => console.log(error));
};
