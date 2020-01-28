import { Component } from 'react';

export interface Props {
  children: Component,
  height: number,
  metric: 'px' | '%',
  className?: string
}
