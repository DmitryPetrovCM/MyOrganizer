import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import rootReducer from 'store/reducers';
import App from './App';

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
}
declare let window: ExtendedWindow;

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const initApp = () => ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app-container')
);

document.addEventListener('DOMContentLoaded', initApp);
