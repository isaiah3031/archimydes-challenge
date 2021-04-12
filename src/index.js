import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './frontend/store/store'
import $ from 'jquery'
import { receiveCurrentUser } from './frontend/actions/session_actions'
// window.receiveCurrentUser = receiveCurrentUser
// window.getState = store.getState;
// window.dispatch = store.dispatch;

// window.$ = $
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
