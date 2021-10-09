import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './contact-app/contact-reducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// const initialState = {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

// const reducer = (state = initialState, {type, payload}) => state;
