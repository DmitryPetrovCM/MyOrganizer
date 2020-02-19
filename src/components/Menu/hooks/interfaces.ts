import React from 'react';

interface Position {
  x: number;
  y: number;
}

export interface DraggableMenuSize {
  size: number;
  DraggableHandle: React.ElementType;
}
