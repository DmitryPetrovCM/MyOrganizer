import actionsTypes from './actionTypes';
import { TopMenuSize } from './interfaces';

export const setTopMenuSize = (size: number): TopMenuSize => ({
  type: actionsTypes.SET_TOP_MENU_SIZE,
  size
});
