import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import feedReducer from '../features/feed/feedSlice';
import sessionReducer from '../features/session/sessionSlice'

export default configureStore({
  reducer: {
    // counter: counterReducer,
    feed: feedReducer,
    session: sessionReducer
  },
});
