import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import fetchMentors from './fetchMentorsReducer';


export default combineReducers({ 
  existingUser: loginReducer,
  registerReducer,
  mentors: fetchMentors
 });