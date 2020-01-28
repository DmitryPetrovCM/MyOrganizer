import React from 'react';
import classNames from 'classnames';
import { Props } from './interfaces';

import styles from './index.scss';

const HorizontalMenu = (props: Props) : any => {
  const { height, metric, className, children } = props;

  return (
      <div className={classNames(styles.horizontalMenu, className)} style={{ height: `${height}${metric}`}}>
        {children}
      </div>
  )
};

HorizontalMenu.defaultProps = {
  metric: 'px'
};
