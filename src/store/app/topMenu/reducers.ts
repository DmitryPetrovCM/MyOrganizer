import { createReducer } from 'redux-create-reducer';
import initialState from 'store/initialStore';
import actionTypes from './actionTypes';
import { Menu } from 'store/stateInterfaces';
import { TopMenuSize } from './interfaces';

const reducers = {
  // [actionTypes.SET_TOP_MENU_SIZE](state: Menu, action: TopMenuSize): Menu {
  [actionTypes.SET_TOP_MENU_SIZE](state: Menu, action: any): any {
    return {
      ...state,
      size: action.size
    }
  }
};

export default createReducer(initialState.topMenu, reducers);
