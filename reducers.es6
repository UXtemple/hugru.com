import { combineReducers } from 'redux';
import { reducer as patterns } from './patterns';
import { reducer as shapes } from './shapes';

export default combineReducers({
  patterns,
  shapes
});
