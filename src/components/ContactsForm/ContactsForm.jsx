import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactsForm.module.css';

const ContactsForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactsForm} onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={event => setName(event.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash, and spaces."
        required
      />
      <input
        type="tel"
        name="number"
        placeholder="Enter phone number"
        value={number}
        onChange={event => setNumber(event.target.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses, and start with +."
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactsForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactsForm;
