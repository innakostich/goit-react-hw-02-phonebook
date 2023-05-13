import React from 'react';
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

export default ContactsList;
