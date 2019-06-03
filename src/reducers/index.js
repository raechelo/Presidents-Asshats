import { combineReducers } from 'redux';
import { preziReducer } from './preziReducer';
import { isLoadingReducer } from './loadingReducer';
import { setError } from './errorReducer';

export const rootReducer = combineReducers({
  pres: preziReducer,
  loading: isLoadingReducer,
  error: setError
})

export default rootReducer;