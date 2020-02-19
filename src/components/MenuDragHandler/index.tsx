import React, {useState, useEffect} from 'react';
import { useDidUpdate } from 'hooks/useDidUpdate';
import classNames from 'classnames';
import { Props, Position } from './interfaces';
import {toggleAttribute} from 'utils';
import styles from './index.scss';
import DraggableHandle from 'components/DraggableHandle';
import {MENU_TYPES} from 'constants/menu';

let body: Element | null = null;

const MenuDragHandler = (props: Props): any => {
  const { menuSize, maxSize, axis, className, type, expandDirection, setMenuSize, onDragStop } = props;
  const [isDrag, setIsDrag] = useState(false);
  const [ownClassNames, setOwnClassNames] = useState();
  const [forcedPosition, forcePosition] = useState<null | { x: number; y: number }>(null);

  const onDrag = (e: any, shifts: any): void => {
    if (!isDrag) {
      setIsDrag(true);
    }

    setMenuSize(shifts[axis]);
  };

  const onStop = (): void => {
    if (isDrag) {
      setIsDrag(false);
    }

    if (menuSize > maxSize) {
      setMenuSize(maxSize);
      forcePosition({
        x: 0,
        y: 0,
        [axis]: maxSize
      });
    }

    onDragStop && onDragStop();
  };

  useDidUpdate(() => {
    if (body) {
      toggleAttribute(body, 'data-dragged');
    }
  }, [isDrag]);

  useEffect(() => {
    body = document.querySelector('body');
  }, []);

  useEffect(() => {
    setOwnClassNames(classNames({
      [styles.horizontal]: type === MENU_TYPES.horizontal,
      [styles.vertical]: type === MENU_TYPES.vertical,
      [className]: className,
    }));
  }, [axis, className]);


  return (
    <DraggableHandle
      className={ownClassNames}
      axis={axis}
      defaultPosition={{[axis]: menuSize}}
      forcedPosition={forcedPosition}
      onDrag={onDrag}
      onStop={onStop}
    />
  )
};

export default MenuDragHandler;
