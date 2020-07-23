import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import fetchMentors from './fetchMentorsReducer';
import UserProfile from './userProfileReducer';
import forgotPasswordReducer from './forgotPasswordReducer';
import resetPasswordReducer from './resetPasswordReducer';

export default combineReducers({ 
  existingUser: loginReducer,
  registerReducer,
  mentors: fetchMentors,
  userProfile: UserProfile.fetchSingleUserProfile,
  updateUserProfile: UserProfile.UpdateUserProfile,
  updateUserImage: UserProfile.UpdateUserImage,
  forgotPasswordReducer,
  resetPasswordReducer
 });