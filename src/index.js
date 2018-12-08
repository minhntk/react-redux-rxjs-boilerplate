import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from './components/TodoList/TodoListContainer';
import { Provider } from 'react-redux'
import store from './configureStore';
import Modal from 'react-modal';

Modal.setAppElement('#app');
ReactDOM.render(
  <Provider store={store}>
    <TodoListContainer />
  </Provider>,
  document.getElementById('app')
);