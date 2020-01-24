import React from 'react';
import ReactDom from 'react-dom';
/* import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './store/reducers';*/
import App from './App';

/* const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);*/

const initApp = () => ReactDom.render(
    <App/>,
  document.getElementById('app-container')
);

document.addEventListener('DOMContentLoaded', initApp);
