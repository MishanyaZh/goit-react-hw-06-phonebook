// import { useState, useEffect } from 'react';

// import { connect } from 'react-redux';

// import { v4 as uuidv4 } from 'uuid';

import { Toaster } from 'react-hot-toast';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Section from './containers/Section/Section';
import MContainer from './containers/MainContainer/MainContainer';

const App = () => {
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

  return (
    <MContainer title="Phonebook">
      <Section>
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
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
