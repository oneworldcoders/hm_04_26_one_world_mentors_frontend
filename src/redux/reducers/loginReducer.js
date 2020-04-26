import { LOGIN, LOGIN_LOADING } from '../actions/types';

const initialState = {
  user: {},
  loading: false,
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
