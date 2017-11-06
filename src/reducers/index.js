import { combineReducers } from 'redux';
import arrWordsReducer from './arrWordsReducer';
import filterStatusReducer from './filterStatusReducer';
import isAddingReducer from './isAddingReducer';

const rootReducer = combineReducers({
  arrWords: arrWordsReducer,
  filterStatus: filterStatusReducer,
  isAdding: isAddingReducer
});

export default rootReducer;
