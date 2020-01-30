import React from 'react';
import { connect } from 'react-redux';
import { wrappedConnect } from 'store/wrappers';
import actions from 'store/app/topMenu/actionCreators';
import { InitialState } from 'store/stateInterfaces';
import { Props } from 'components/Menu/HorizontalMenu/interfaces';

import HorizontalMenu from 'components/Menu/HorizontalMenu';

const mapStateToProps = (state: InitialState): any => {
  const { topMenu: { size: height, metric, tools } } = state;

  return { height, metric, tools }
};

const mapDispatchToProps = (dispatch: Function) => ({
  setHeight: (value: number) => dispatch(actions.setTopMenuSize(value))
});

// worked case
/* type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

type NewProps = StateProps & DispatchProps & Props;


const connected: React.ComponentType<NewProps> = connect(
    mapStateToProps,
    mapDispatchToProps
)(HorizontalMenu);

export default connected;*/

export default wrappedConnect<Props>(mapStateToProps, mapDispatchToProps)(HorizontalMenu)
