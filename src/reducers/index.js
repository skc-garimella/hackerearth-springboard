import { combineReducers } from 'redux';
import CoursesReducer from './reducer-courses';


const rootReducer = combineReducers({
  courses : CoursesReducer,

});

export default rootReducer;
