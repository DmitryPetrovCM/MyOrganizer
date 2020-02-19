import {ExpandDirections, MenuType} from 'store/stateInterfaces';

export interface Position {
  x: number;
  y: number;
}

export interface Props {
  menuSize: number;
  maxSize: number;
  axis: 'x' | 'y';
  className: string | '';
  type: MenuType;
  expandDirection: ExpandDirections;
  setMenuSize: (value: number) => void;
  onDragStop?: (value?: number) => void | undefined;
}
