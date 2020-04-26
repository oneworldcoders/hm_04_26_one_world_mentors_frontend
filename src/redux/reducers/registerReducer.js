import * as types from '../actions/types';


const initialState = {
  isLoading: false,
  users: [],
  errors: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case types.REGISTER_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default registerReducer;