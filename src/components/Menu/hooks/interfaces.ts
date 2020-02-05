export interface DraggableMenuSize {
  size: number;
  onDrag: (arg: any, shifts?: any) => any;
  onStop: (arg: any, shifts: any) => any;
}
