export interface Desktop {
  type: string;
}

export type Metric =  'px' | '%';

export interface Menu {
  size: number;
  minSize: number;
  metric: Metric;
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
