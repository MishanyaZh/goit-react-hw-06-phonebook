import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: () => null,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
