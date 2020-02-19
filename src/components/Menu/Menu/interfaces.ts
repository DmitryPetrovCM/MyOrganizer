import { Component, ReactNode } from 'react';
import { ExpandDirections, MenuType } from 'store/stateInterfaces';

export interface Props {
  type: MenuType;
  expandDirection: ExpandDirections;
  size: number;
  maxSize: number;
  metric: 'px' | '%';
  className?: string;
  children?: ReactNode;
  draggable?: boolean;
  tools?: [];
  setSize: (value: number) => void;
}
