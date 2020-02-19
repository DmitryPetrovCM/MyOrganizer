import React, {useEffect, useState} from 'react';
import Draggable from 'react-draggable';
import { Props } from './interfaces';
import classNames from 'classnames';

import styles from "./index.scss";

const DEFAULT_POSITION = {
  x: 0,
  y: 0
};

const DraggableHandle = (props: Props): any => {
  const { children, axis, handle, forcedPosition, defaultPosition, className, bounds, onDrag: externalOnDrag, onStart, onStop } = props;
  const [position, setPosition] = useState({
    ...DEFAULT_POSITION,
    ...defaultPosition
  });

  useEffect(() => {
    if (forcedPosition) {
      setPosition((prevPosition) => ({
        ...prevPosition,
        [axis]: forcedPosition[axis]
      }));
    }
  }, [forcedPosition]);

  const onDrag = (e: any, shifts: any) => {
    setPosition((prevPosition => {
      if (prevPosition) {
        return {
          ...prevPosition,
          [axis]: shifts[axis]
        }
      }

      return {
        ...DEFAULT_POSITION,
        [axis]: shifts[axis]
      }
    }));

    externalOnDrag(e, shifts);
  };

  return (
    <Draggable
      axis={axis}
      handle={handle}
      bounds={bounds}
      position={position}
      onStart={onStart}
      onDrag={onDrag}
      onStop={onStop}
    >
      <div className={classNames(styles.handle, className)}>
        {children || null}
      </div>
    </Draggable>
  );
};

/* eslint-disable @typescript-eslint/no-empty-function */
DraggableHandle.defaultProps = {
  axis: 'both',
  bounds: 'body',
  handle: `.${styles.handle}`,
  position: {},
  defaultPosition: {
    x: 0,
    y: 0
  },
  className: '',
  onStart: () => {},
  onDrag: () => {},
  onStop: () => {}
};

export default DraggableHandle;
