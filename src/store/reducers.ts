import { combineReducers } from 'redux';
import topMenuReducers from 'store/app/topMenu/reducers';
import leftMenuReducers from 'store/app/leftSideMenu/reducers';

export default combineReducers({
  topMenu: topMenuReducers,
  leftSideMenu: leftMenuReducers
});
