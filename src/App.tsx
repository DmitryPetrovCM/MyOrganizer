import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import TopMenu from 'containers/Menu/TopMenu';

import './App.scss';

const App = () => {
  return (
    <div id="app">
      <TopMenu />
    </div>
  );
};

export default App;
