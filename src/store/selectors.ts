import { createSelector } from 'reselect';
import { TopMenu } from './stateInterfaces';

export const getTopMenu = (state: any): TopMenu => state.topMenu;
export const getTopMenuHeight = createSelector(getTopMenu, (topMenu: TopMenu): number => topMenu.size);
export const getTopMenuMetric = createSelector(getTopMenu, (topMenu: TopMenu): TopMenu["metric"] => topMenu.metric);
export const getTopMenuTools = createSelector(getTopMenu, (topMenu: TopMenu): any => topMenu.tools);
