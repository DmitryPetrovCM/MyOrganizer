import React, {FunctionComponent} from 'react';
import classNames from 'classnames';
import { Props } from './interfaces';

import styles from './index.scss';

const HorizontalMenu: React.FC<Props> = (props: Props) => {
  const { height, metric, className, children } = props;

  return (
      <div className={classNames(styles.horizontalMenu, className)} style={{ height: `${height}${metric}`}}>
        {children ? children : null}
      </div>
  )
};

HorizontalMenu.defaultProps = {
  metric: 'px'
};

export default HorizontalMenu;
