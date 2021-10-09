import { combineReducers } from 'redux';
import types from './contact-types';
import toast from 'react-hot-toast';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      // return [...state, payload];
      const doubleContact = state.find(contact =>
        contact.name.toLowerCase().includes(payload.name.toLowerCase()),
      );

      if (doubleContact && doubleContact.name.length === payload.length) {
        toast.error(`${payload.name} is already in contacts`);
        return [...state];
      } else {
        toast.success(`${payload.name} add to Contacts`, { icon: '👏' });
        console.log(payload);
        return [payload, ...state];
      }

    case types.DELETE:
      toast.success(`${payload.name} delete with Contacts!`);
      return state.filter(contact => contact.id !== payload.contactId);

    default:
      return state;
  }
};

const filter = (state = '', action) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
