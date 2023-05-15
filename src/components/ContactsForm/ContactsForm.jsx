import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactsForm.module.css';

const ContactsForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
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
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactsForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactsForm;