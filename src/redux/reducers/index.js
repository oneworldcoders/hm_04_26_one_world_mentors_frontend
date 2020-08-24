import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import fetchMentors from './fetchMentorsReducer';
import UserProfile from './userProfileReducer';
import forgotPasswordReducer from './forgotPasswordReducer';
import resetPasswordReducer from './resetPasswordReducer';
import fetchCourses from './fetchAllCourses';
import fetchACourse from './fetchACourseReducer';
import enrollCourse from './enrollCourse';
import addCourse from './addCoursesReducer';
import fetchMenteeRecord from './fetchMenteeRecordReducer';
import fetchMenteeSubtracks from "./fetchMenteeSubtracksReducer";
import checkMarkSubtrack from "./checkMarkSubtrackReducer"

export default combineReducers({ 
  existingUser: loginReducer,
  registerReducer,
  mentors: fetchMentors,
  userProfile: UserProfile.fetchSingleUserProfile,
  updateUserProfile: UserProfile.UpdateUserProfile,
  updateUserImage: UserProfile.UpdateUserImage,
  forgotPasswordReducer,
  resetPasswordReducer,
  fetchCourses,
  enrollCourse,
  addCourse,
  fetchMenteeRecord,
  fetchMenteeSubtracks,
  fetchACourse,
  checkMarkSubtrack
 });