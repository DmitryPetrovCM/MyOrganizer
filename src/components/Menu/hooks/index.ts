import React, {useState, useEffect, useLayoutEffect} from 'react';
import { DraggableMenuSize } from './interfaces';
import { toggleAttribute } from 'utils';

export const useDraggableMenuSize = (menuSize: number, setMenuSize: (value: number) => any): DraggableMenuSize => {
  const [size, setSize] = useState(menuSize);
  const [isDrag, setIsDrag] = useState(false);
  const [body, setBody] = useState<Element | null>(null);

  useEffect(() => {
    if (body) {
      toggleAttribute(body, 'data-dragged');
    }
  }, [isDrag]);

  useEffect(() => {
    setBody(document.querySelector('body'));
  }, [])

  return {
    size,
    onDrag: (e, shifts) => {
      if (!isDrag) {
        setIsDrag(true);
      }

      setSize((prevState: number): number => prevState + shifts.deltaY);
    },
    onStop: () => {
      if (isDrag) {
        setIsDrag(false);
      }

      setMenuSize(size);
    }
  }
};
