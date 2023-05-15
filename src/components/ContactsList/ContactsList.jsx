import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

const ContactsList = ({ contacts }) => (
  <ul className={css.list}>
    {contacts.map(contact => (
      <li key={contact.id} className={css.item}>
        <p className={css.name}>{contact.name}</p>
        <p className={css.number}>{contact.number}</p>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactsList;
