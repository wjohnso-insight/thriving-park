//TODO: [] write unit test to make sure that `dispatch(getActiveUser)` is only called once

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import { getActiveUser } from './features/session/sessionSlice'

import './index.scss'
import server from './server'

server() //* Creates fake rest api

store.dispatch(getActiveUser)  //* Async thunk hydrates application
store.dispatch({type: 'feed/feedPostAdded', payload: {userId: 1, body: "This is post #3"}}) //! Remove from prod

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
