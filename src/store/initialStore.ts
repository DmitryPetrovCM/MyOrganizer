import { InitialState } from './stateInterfaces';

const initialState: InitialState = {
  topMenu: {
    size: 50,
    minSize: 50,
    metric: 'px',
    tools: []
  },
  leftSideMenu: {
    size: 150,
    minSize: 150,
    metric: 'px',
    desktops: []
  },
  bottomMenu: {
    size: 100,
    minSize: 100,
    metric: 'px',
  },
  workspace: {},
  currentDesktopIndex: 0
};

export default initialState;
