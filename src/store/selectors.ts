import { createSelector } from 'reselect';
import {TopMenu, LeftMenu, MenuType, ExpandDirections} from './stateInterfaces';

export const getTopMenu = (state: any): TopMenu => state.topMenu;
export const getTopMenuHeight = createSelector(getTopMenu, (topMenu: TopMenu): number => topMenu.size);
export const getTopMenuMetric = createSelector(getTopMenu, (topMenu: TopMenu): TopMenu["metric"] => topMenu.metric);
export const getTopMenuTools = createSelector(getTopMenu, (topMenu: TopMenu): any => topMenu.tools);
export const getTopMenuMaxHeight = createSelector(getTopMenu, (topMenu: TopMenu): number => topMenu.maxSize);
export const getTopMenuType = createSelector(getTopMenu, (topMenu: TopMenu): MenuType => topMenu.type);
export const getTopMenuExpandDirection = createSelector(getTopMenu, (topMenu: TopMenu): ExpandDirections => topMenu.expandDirection);

export const getLeftMenu = (state: any): LeftMenu => state.leftSideMenu;
export const getLeftMenuWidth = createSelector(getLeftMenu, (leftSideMenu: LeftMenu): number => leftSideMenu.size);
export const getLeftMenuMetric = createSelector(getLeftMenu, (leftSideMenu: LeftMenu): LeftMenu["metric"] => leftSideMenu.metric);
export const getLeftMenuMaxWidth = createSelector(getLeftMenu, (leftSideMenu: LeftMenu): number => leftSideMenu.maxSize);
export const getLeftMenuType = createSelector(getLeftMenu, (leftSideMenu: LeftMenu): MenuType => leftSideMenu.type);
export const getLeftMenuExpandDirection = createSelector(getLeftMenu, (leftSideMenu: LeftMenu): ExpandDirections => leftSideMenu.expandDirection);
