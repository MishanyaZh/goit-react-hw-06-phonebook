import { v4 as uuidv4 } from 'uuid';
import types from './contact-types';

const formSubmitHandler = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    name,
    number,
    id: uuidv4(),
  },
});

const deleteContact = (contactId, name) => ({
  type: types.DELETE,
  payload: { contactId, name },
});

export default { formSubmitHandler, deleteContact };
