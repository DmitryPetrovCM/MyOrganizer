import React, {useRef} from 'react';
import classNames from 'classnames';
import {Props} from './interfaces';

import MenuDragHandler from 'components/MenuDragHandler';

import { MENU_TYPES } from 'constants/menu';
import styles from './index.scss';

const RELATIVE_PARAMS = {
  [MENU_TYPES.horizontal]: {
    dynamicProperty: 'height',
    axis: 'y',
    orientationClassName: styles.horizontalMenu
  },
  [MENU_TYPES.vertical]: {
    dynamicProperty: 'width',
    axis: 'x',
    orientationClassName: styles.verticalMenu
  }
};

const Menu = (props: Props): any => {
  const {size, maxSize, metric, className, draggable, type, expandDirection, children, setSize} = props;
  const { dynamicProperty, axis, orientationClassName } = RELATIVE_PARAMS[type];
  const menuElem = useRef(null);

  return (
    <div
      ref={menuElem}
      className={classNames(styles.menu, orientationClassName, className)}
      style={{[dynamicProperty]: `${size}${metric}`}}>
      {draggable
        ? (
          <MenuDragHandler
            className={styles.draggableHandle}
            axis={axis as 'x' | 'y'}
            menuSize={size}
            maxSize={maxSize}
            type={type}
            expandDirection={expandDirection}
            controlledRef={menuElem}
            controlledProperty={dynamicProperty}
            setMenuSize={setSize}
          />
        )
        : null}
      {children ? children : null}
    </div>
  );
};

Menu.defaultProps = {
  metric: 'px',
  draggable: true,
  isHorizontal: true
};

export default Menu;
