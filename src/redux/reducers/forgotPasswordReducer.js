import { FORGOT_PASSWORD } from "../actions/types";

const initialState = {
  forgotPasswordStatus: '',
};

const forgotPasswordReducer = (state = initialState, action) => {
  console.log(action.payload);
  
  switch (action.type) {
    case FORGOT_PASSWORD:
      return {
        ...state,
        forgotpassword: 'ok',
      };
    default:
      return state;
  }
};
export default forgotPasswordReducer;
