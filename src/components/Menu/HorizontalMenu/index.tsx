import React from 'react';
import classNames from 'classnames';
import {Props} from './interfaces';

import {useDraggableMenuSize} from '../hooks';
import DraggableHandle from 'components/DraggableHandle';

import styles from './index.scss';

const HorizontalMenu = (props: Props): any => {
  const {height, metric, className, draggable, children, setHeight} = props;
  const {size, onDrag, onStop} = useDraggableMenuSize(height, setHeight);

  return (
    <div className={classNames(styles.horizontalMenu, className)} style={{height: `${size}${metric}`}}>
      {draggable
        ? (
          <DraggableHandle
            className={styles.draggableHandle}
            axis="y"
            defaultPosition={{ y: height }}
            onDrag={onDrag}
            onStop={onStop}
          />
          )
        : null}
      {children ? children : null}
    </div>
  );
};

HorizontalMenu.defaultProps = {
  metric: 'px',
  draggable: true
};

export default HorizontalMenu;
