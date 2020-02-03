import { Component, ReactNode } from 'react';

export interface Props extends Component {
  height: number;
  metric: 'px' | '%';
  className?: string;
  children?: ReactNode;
  tools: [];
  setHeight: (value: number) => void;
}
