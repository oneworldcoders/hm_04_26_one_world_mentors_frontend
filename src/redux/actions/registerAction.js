import * as types from './types';
import axiosInstance from './axiosApi';


export const registerUserStart = () => ({
  type: types.REGISTER_USER_START,
});

export const registerUserFailed = payload => ({
  type: types.REGISTER_USER_FAILURE,
  payload,
});

export const registerUserSuccess = payload => ({
  type: types.REGISTER_USER_SUCCESS,
  payload,
});

export const registerUser = newUserDetails => (dispatch) => {  
    dispatch(registerUserStart());
    return axiosInstance
      .post('/signup', newUserDetails)
      .then(({ data, status }) => {
      dispatch(registerUserSuccess(data));   
    return status;
  }).catch((err) => {
    console.log(err);
    
    dispatch(registerUserFailed({ message: err.response.data.error }));
  });
  };