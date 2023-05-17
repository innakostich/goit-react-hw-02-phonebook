// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import css from './ContactsForm.module.css';

// const ContactsForm = ({ onAddContact }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (name.trim() === '' || number.trim() === '') {
//       return;
//     }
//     const formattedName = name.trim().toLowerCase(); 
//     onAddContact(formattedName, number);
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form className={css.contactsForm} onSubmit={handleSubmit}>
//       <label>Name</label>
//       <input
//         type="text"
//         name="name"
//         placeholder="Enter name"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//       />
//       <label>Phone Number</label>
//       <input
//         type="text"
//         placeholder="Phone Number"
//         value={number}
//         onChange={(event) => setNumber(event.target.value)}
//       />
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };

// ContactsForm.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
// };

// export default ContactsForm;

import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsForm.module.css';

class ContactsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    const formattedName = name.trim().toLowerCase();
    this.props.onAddContact(formattedName, number);
    this.setState({ name: '', number: '' });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.contactsForm} onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChange}
        />
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Phone Number"
          value={number}
          onChange={this.handleChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactsForm;
