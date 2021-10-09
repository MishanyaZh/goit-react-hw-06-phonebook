import { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import toast, { Toaster } from 'react-hot-toast';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Section from './containers/Section/Section';
import MContainer from './containers/MainContainer/MainContainer';

const App = () => {
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // const [filter, setFilter] = useState('');

  // const localStorageKeyName = 'contacts';

  // useEffect(() => {
  //   const parsedContacts = JSON.parse(
  //     localStorage.getItem(localStorageKeyName),
  //   );
  //   setContacts(parsedContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(localStorageKeyName, JSON.stringify(contacts));
  // }, [contacts]);

  // const formSubmitHandler = ({ name, number }) => {
  //   const newContact = {
  //     name,
  //     number,
  //     id: uuidv4(),
  //   };

  //   setContacts(prevState => {
  //     const doubleContact = prevState.find(contact =>
  //       contact.name.toLowerCase().includes(name.toLowerCase()),
  //     );

  //     if (doubleContact && doubleContact.name.length === name.length) {
  //       toast.error(`${name} is already in contacts`);
  //       return [...prevState];
  //     } else {
  //       setContacts([newContact, ...prevState]);
  //       toast.success(`${name} add to Contacts`, { icon: '👏' });
  //     }
  //   });
  // };

  // const deleteContact = (contactId, name) => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId),
  //   );
  //   toast.success(`${name} delete with Contacts!`);
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // const filteredContacts = getVisibleContacts();

  return (
    <MContainer title="Phonebook">
      <Section>
        <ContactForm
        // formSubmitHandler={formSubmitHandler}
        />
      </Section>

      <Section title="Contacts">
        {/* <Filter
          onChange={changeFilter} value={filter}
        /> */}
        <ContactList
        // contacts={filteredContacts}
        // onDeleteContact={deleteContact}
        />
      </Section>
      <Toaster position="top-center" reverseOrder={false} />
    </MContainer>
  );
};

// const mapStateToProps = state => {

// };

// const mapDispatchToProps = dispatch => {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
