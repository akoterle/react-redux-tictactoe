import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import gameApp from '../reducers/index'
import App from './App';

it('renders without crashing', () => {
  const store = createStore(gameApp)
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div);
});