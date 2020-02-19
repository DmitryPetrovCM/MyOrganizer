import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLeftMenuSize } from 'store/app/leftSideMenu/actionCreators';
import {
  getLeftMenuWidth,
  getLeftMenuMetric,
  getLeftMenuMaxWidth,
  getLeftMenuType,
  getLeftMenuExpandDirection,
} from 'store/selectors';

import Menu from 'components/Menu/Menu';
import styles from './index.scss';

const LeftMenuContainer = () => {
  const dispatch = useDispatch();
  const width = useSelector(getLeftMenuWidth);
  const metric = useSelector(getLeftMenuMetric);
  const maxWidth = useSelector(getLeftMenuMaxWidth);
  const type = useSelector(getLeftMenuType);
  const expandDirection = useSelector(getLeftMenuExpandDirection);

  return (
    <Menu
      size={width}
      maxSize={maxWidth}
      metric={metric}
      type={type}
      expandDirection={expandDirection}
      className={styles.leftMenu}
      setSize={(value: number): any => dispatch(setLeftMenuSize(value))}
    />
  );
};

export default LeftMenuContainer;
