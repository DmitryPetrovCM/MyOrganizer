import React, {useState, useEffect} from 'react';
import {DraggableMenuSize} from './interfaces';
import {toggleAttribute} from 'utils';
import styles from 'components/Menu/HorizontalMenu/index.scss';
import DraggableHandler from 'components/DraggableHandle';
import { Props as DraggableProps } from 'components/DraggableHandle/interfaces';

let body: Element | null = null;

export const useDraggableMenuSize = (menuSize: number, maxSize: number, setMenuSize: (value: number) => any, axis: string): DraggableMenuSize => {
  const [size, setSize] = useState(menuSize);
  const [isDrag, setIsDrag] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    [axis]: menuSize
  });

  const onDrag = (e: any, shifts: any): void => {
    console.log('drag')
    if (!isDrag) {
      setIsDrag(true);
    }

    setSize((prevState: number): number => prevState + shifts.deltaY);
  };

  const onStop = (): void => {
    if (isDrag) {
      setIsDrag(false);
    }

    if (size < maxSize) {
      setMenuSize(size);
    } else {
      setMenuSize(maxSize);
      setPosition(prevState => ({
        ...prevState,
        [axis]: maxSize
      }));
    }
  };

  const DraggableHandle = (props: DraggableProps) => (
    <DraggableHandler
      className={styles.draggableHandle}
      axis={axis}
      defaultPosition={{y: menuSize}}
      onDrag={onDrag}
      onStop={onStop}
      {...props}
    />
  );

  useEffect(() => {
    if (body) {
      toggleAttribute(body, 'data-dragged');
    }

    return () => {
      console.log('unmounted')
    }
  }, [isDrag]);

  useEffect(() => {
    body = document.querySelector('body');
  }, []);

  useEffect(() => {
    if (menuSize !== size) {
      setSize(menuSize);
    }
  }, [menuSize]);

  return {
    size,
    DraggableHandle,
  }
};
