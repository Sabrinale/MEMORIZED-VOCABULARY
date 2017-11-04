import { combineReducers } from 'redux';
import arrWordsReducer from './arrWordsReducer';
import filterStatusReducer from './filterStatusReducer';
const rootReducer = combineReducers({
  arrWords: arrWordsReducer,
  filterStatus: filterStatusReducer,
});

export default rootReducer;
