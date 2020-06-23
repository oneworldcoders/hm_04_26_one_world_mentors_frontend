import axios from "axios";
import {
  FETCH_SINGLE_USER,
  UPDATE_USER_PROFILE,
  UPDATE_USER_IMAGE,
} from "./types";

const baseUrl = "https://owc-mentor-backend.herokuapp.com";
const token = localStorage.getItem("jwtToken");
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export const fetchSingleUserProfile = (userId) => (dispatch) => {
  axios
    .get(`${baseUrl}/user/${userId}`, { headers })
    .then((res) =>
      dispatch({
        type: FETCH_SINGLE_USER,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error));
};

export const updateUserProfile = (userId, updateData) => (dispatch) => {
  axios
    .patch(`${baseUrl}/user/profile/${userId}`, updateData , { headers })
    .then((res) => {
      console.log(res.data, 'res.data')
      dispatch({
        type: UPDATE_USER_PROFILE,
        payload: res.data,
      })
      window.location = "/dashboard"
    })
    .catch((error) => console.log(error));
};

export const updateUserProfileImage = (userId, userImage) => (dispatch) => {
  axios
    .patch(`${baseUrl}/user/profile_picture/${userId}`, userImage, { headers })
    .then((res) =>{
      console.log(res, 'res')
      dispatch({
        type: UPDATE_USER_IMAGE,
        payload: res.data,
      })
    })
    .catch((error) => console.log(error));
};
