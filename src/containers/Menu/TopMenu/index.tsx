import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTopMenuSize } from 'store/app/topMenu/actionCreators';
import { getTopMenuHeight, getTopMenuMetric, getTopMenuTools } from 'store/selectors';

import HorizontalMenu from 'components/Menu/HorizontalMenu';

const TopMenuContainer = () => {
  const dispatch = useDispatch();
  const height = useSelector(getTopMenuHeight);
  const metric = useSelector(getTopMenuMetric);
  const tools = useSelector(getTopMenuTools);

  return (
    <HorizontalMenu
      height={height}
      metric={metric}
      tools={tools}
      setHeight={(value: number) => dispatch(setTopMenuSize(value))}
    />
  );
};

export default TopMenuContainer;
