import { combineReducers } from 'redux';
import UserReducer from '../reducers/user';
const rootReducer = combineReducers({
   isUserLoggedIn:UserReducer
});

export default rootReducer;
