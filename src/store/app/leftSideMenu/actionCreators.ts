import actionsTypes from './actionTypes';
import { LeftMenuSize } from './interfaces';

export const setLeftMenuSize = (size: number): LeftMenuSize => ({
  type: actionsTypes.SET_LEFT_MENU_SIZE,
  size
});
