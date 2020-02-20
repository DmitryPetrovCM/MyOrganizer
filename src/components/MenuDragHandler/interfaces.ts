import {ExpandDirections, MenuType} from 'store/stateInterfaces';
import React from "react";

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
  controlledRef: React.RefObject<any>;
  controlledProperty: string;
  setMenuSize: (value: number) => void;
  onDragStop?: (value?: number) => void | undefined;
}
