import { createReducer } from 'redux-create-reducer';
import initialState from 'store/initialStore';
import actionTypes from './actionTypes';
import { Menu } from 'store/stateInterfaces';

const reducers = {
  [actionTypes.SET_LEFT_MENU_SIZE](state: Menu, action: any): any {
    return {
      ...state,
      size: action.size
    }
  }
};

export default createReducer(initialState.leftSideMenu, reducers);
