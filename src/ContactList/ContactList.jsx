import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactActions from '../redux/contact-app/contact-actions';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.contactsList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contactsItem}>
        <span>{name}:</span>
        <span>{number}</span>
        <span>
          <button
            className={css.listButton}
            type="button"
            onClick={() => onDeleteContact(id, name)}
          >
            delete
          </button>
        </span>
      </li>
    ))}
  </ul>
);

const getVisibleContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: (id, name) =>
    dispatch(contactActions.deleteContact(id, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
