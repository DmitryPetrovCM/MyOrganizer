import { combineReducers } from 'redux';
import topMenuReducers from 'store/app/topMenu/reducers';

export default combineReducers({
  topMenu: topMenuReducers
});
