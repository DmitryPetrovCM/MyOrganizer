import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import TopMenu from 'containers/Menu/TopMenu';

import styles from  './App.scss';

const App = () => {
  return (
    <div id="app" className={styles.app}>
      <TopMenu />
    </div>
  );
};

export default App;
