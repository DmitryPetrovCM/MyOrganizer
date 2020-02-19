import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTopMenuSize } from 'store/app/topMenu/actionCreators';
import {
  getTopMenuHeight,
  getTopMenuMetric,
  getTopMenuTools,
  getTopMenuMaxHeight,
  getTopMenuType,
  getTopMenuExpandDirection,
} from 'store/selectors';

import Menu from 'components/Menu/Menu';
import styles from './index.scss';

const TopMenuContainer = () => {
  const dispatch = useDispatch();
  const height = useSelector(getTopMenuHeight);
  const metric = useSelector(getTopMenuMetric);
  const tools = useSelector(getTopMenuTools);
  const maxHeight = useSelector(getTopMenuMaxHeight);
  const type = useSelector(getTopMenuType);
  const expandDirection = useSelector(getTopMenuExpandDirection);

  return (
    <Menu
      size={height}
      maxSize={maxHeight}
      metric={metric}
      type={type}
      expandDirection={expandDirection}
      tools={tools}
      className={styles.topMenu}
      setSize={(value: number): any => dispatch(setTopMenuSize(value))}
    />
  );
};

export default TopMenuContainer;
