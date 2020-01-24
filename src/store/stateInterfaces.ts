export interface Desktop {
  type: string
}

interface Menu {
  size: number,
  minSize: number,
  metric: 'px' | '%'
}

interface TopMenu extends Menu {
  tools: []
}

interface LeftMenu extends Menu {
  desktops: Desktop[]
}

interface Workspace extends Desktop {
  index: number
}

export interface InitialState {
  topMenu: TopMenu,
  leftSideMenu: LeftMenu,
  bottomMenu: Menu,
  workspace: Workspace | {},
  currentDesktopIndex: number
}
