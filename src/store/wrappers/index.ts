import React from "react";
import { connect } from 'react-redux';

export const wrappedConnect = <connectType> (mapStateToProps: any, mapDispatchToProps: any) => {
  /* eslint-disable no-undef */
  type StateProps = ReturnType<typeof mapStateToProps>;
  type DispatchProps = typeof mapDispatchToProps;

  type Props = StateProps & DispatchProps & connectType;

  return (Element: any) => {
    const connected: React.ComponentType<Props> = connect(
        mapStateToProps,
        mapDispatchToProps
    )(Element);

    return connected;
  }
};
