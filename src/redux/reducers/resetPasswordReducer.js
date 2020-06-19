import { RESET_PASSWORD } from "../actions/types";

const initialState = {
  resetPasswordStatus: '',
};

const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return {
        ...state,
        resetpassword: 'ok',
      };
    default:
      return state;
  }
};
export default resetPasswordReducer;
