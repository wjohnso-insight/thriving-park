import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';

import './index.scss'
import server from './server'

server()

store.dispatch({type: 'feed/feedPostAdded', payload: {userId: 1, body: "This is post #3"}})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
