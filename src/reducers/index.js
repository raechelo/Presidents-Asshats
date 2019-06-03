import { combineReducers } from 'redux';
import { preziReducer } from './preziReducer';

export const rootReducer = combineReducers({
  pres: preziReducer
})

export default rootReducer;