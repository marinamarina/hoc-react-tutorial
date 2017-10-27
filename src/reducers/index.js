import { combineReducers } from 'redux';
import authenticationStatus from './authenticationStatusReducer'

const rootReducer = combineReducers({
  authenticationStatus
});

export default rootReducer;
