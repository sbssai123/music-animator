import { combineReducers } from "redux";
import authReducer from './authReducer';
import currentSongReducer from './currentSongReducer';

export default combineReducers({
    authReducer,
    currentSongReducer
});