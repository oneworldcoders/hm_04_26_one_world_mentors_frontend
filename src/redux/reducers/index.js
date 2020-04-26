import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import fetchMentors from './fetchMentorsReducer';


export default combineReducers({ 
  existingUser: loginReducer,
  mentors: fetchMentors
 });