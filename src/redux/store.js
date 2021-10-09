// do
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import {combineReducers } from 'redux';
// do
// const rootReducer = combineReducers({
//   contacts: contactReducer,
// });
// do
// const store = createStore(rootReducer, composeWithDevTools());

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactReducer from './contact-app/contact-reducer';

// const middleware = [...(), logger];

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
