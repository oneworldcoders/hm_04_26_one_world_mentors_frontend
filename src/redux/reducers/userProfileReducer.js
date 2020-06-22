import { FETCH_SINGLE_USER, UPDATE_USER_PROFILE, UPDATE_PROFILE_LOADING, UPDATE_USER_IMAGE } from "../actions/types";

const intitialState = {
  user: [],
  isAuthenticated: false,
};

const intitialUpdateState = {
  updatedUser: {},
  loading: false,
};

const intitialImageState = {
  updatedImage: "",
};
class UserProfile {
  static fetchSingleUserProfile = (state = intitialState, action) => {
    switch (action.type) {
      case FETCH_SINGLE_USER:
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      default:
        return state;
    }
  };

  static UpdateUserProfile = (state = intitialUpdateState, action) => {
    switch (action.type) {
      case UPDATE_PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
      case UPDATE_USER_PROFILE:
        return {
          ...state,
          updatedUser: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };

  static UpdateUserImage = (state = intitialImageState, action) => {
    switch (action.type) {
      case UPDATE_USER_IMAGE:
        return {
          ...state,
          updatedImage: action.payload,
        };
      default:
        return state;
    }
  };
}

export default UserProfile;
