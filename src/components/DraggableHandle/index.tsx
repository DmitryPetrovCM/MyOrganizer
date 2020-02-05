import React from 'react';
import Draggable from 'react-draggable';
import { Props } from './interfaces';
import classNames from 'classnames';

import styles from "./index.scss";

const DEFAULT_POSITION = {
  x: 0,
  y: 0
};

const DraggableHandle = (props: Props): any => {
  const { children, axis, handle, defaultPosition, className, bounds, onDrag, onStart, onStop } = props;

  return (
    <Draggable
      axis={axis}
      handle={handle}
      bounds={bounds}
      defaultPosition={{
        ...DEFAULT_POSITION,
        ...defaultPosition
      }}
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
  defaultPosition: {
    x: 0,
    y: 0
  },
  className: '',
  onStart: () => {},
  onDrag: () => {},
  onStop: () => {}
}

export default DraggableHandle;
