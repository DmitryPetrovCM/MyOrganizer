import { Component, ReactNode } from 'react';

export interface Props {
  height: number;
  metric: 'px' | '%';
  className?: string;
  children?: ReactNode;
  draggable?: boolean;
  tools: [];
  setHeight: (value: number) => void;
}
