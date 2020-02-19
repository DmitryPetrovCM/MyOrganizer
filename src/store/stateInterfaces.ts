export interface Desktop {
  type: string;
}

export type ExpandDirections = 'top' | 'right' | 'bottom' | 'left';
export type MenuType = 'horizontal' | 'vertical';

export type Metric =  'px' | '%';

export interface Menu {
  size: number;
  minSize: number;
  metric: Metric;
  maxSize: number;
  expandDirection: ExpandDirections;
  type: MenuType;
}

export interface TopMenu extends Menu {
  tools: [];
}

export interface LeftMenu extends Menu {
  desktops: Desktop[];
}

export interface Workspace extends Desktop {
  index: number;
}

export interface InitialState {
  topMenu: TopMenu;
  leftSideMenu: LeftMenu;
  bottomMenu: Menu;
  workspace: Workspace | {};
  currentDesktopIndex: number;
}
