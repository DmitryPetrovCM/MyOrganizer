import {ExpandDirections, InitialState, MenuType} from './stateInterfaces';
import { MENU_TYPES, EXPAND_DIRECTIONS } from 'constants/menu';

const initialState: InitialState = {
  topMenu: {
    size: 50,
    minSize: 50,
    maxSize: 150,
    metric: 'px',
    expandDirection: EXPAND_DIRECTIONS.bottom as ExpandDirections,
    type: MENU_TYPES.horizontal as MenuType,
    tools: []
  },
  leftSideMenu: {
    size: 150,
    minSize: 150,
    maxSize: 250,
    metric: 'px',
    expandDirection: EXPAND_DIRECTIONS.right as ExpandDirections,
    type: MENU_TYPES.vertical as MenuType,
    desktops: []
  },
  bottomMenu: {
    size: 100,
    minSize: 100,
    maxSize: 150,
    metric: 'px',
    expandDirection: EXPAND_DIRECTIONS.top as ExpandDirections,
    type: MENU_TYPES.horizontal as MenuType,
  },
  workspace: {},
  currentDesktopIndex: 0
};

export default initialState;
