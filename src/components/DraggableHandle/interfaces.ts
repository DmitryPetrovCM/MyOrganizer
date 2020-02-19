type Bounds = {
  left: number;
  top: number;
  right: number;
  bottom: number;
} | string

interface Position {
  x?: number;
  y?: number;
}

export interface Props {
  className: string;
  defaultPosition?: Position;
  forcedPosition?: Position | null;
  bounds: Bounds;
  axis: 'x' | 'y';
  handle: string;
  onStart: (e: any, shifts: any) => any;
  onDrag: (e: any, shifts?: any) => any;
  onStop: (e: any, shifts: any) => any;
  children?: any;
}
