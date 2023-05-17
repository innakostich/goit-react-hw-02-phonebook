
// import React, { useState } from 'react';
// import shortid from 'shortid';
// import ContactsForm from './ContactsForm/ContactsForm';
// import ContactsList from './ContactsList/ContactsList';
// import Filter from './Filter/Filter';
// import css from './App.module.css';

// const App = () => {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');

//   const handleAddContact = (name, number) => {
    
//     const existingContact = contacts.find(contact => contact.name === name);

//     if (existingContact) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }

//     const newContact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };

//     setContacts([...contacts, newContact]);
//   };

//   const handleDeleteContact = (id) => {
//     const updatedContacts = contacts.filter((contact) => contact.id !== id);
//     setContacts(updatedContacts);
//   };

//   const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//   };

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <h1 className={css.phonebookTitle}>Phonebook</h1>
//       <ContactsForm onAddContact={handleAddContact} />
//       <h2 className={css.contactsTitle}>Contacts</h2>
//       <p className={css.contactsLabel}>Find contacts by name</p>
//       <Filter value={filter} onChange={handleFilterChange} />
//       <ContactsList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import shortid from 'shortid';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const existingContact = contacts.find((contact) => contact.name === name);

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1 className={css.phonebookTitle}>Phonebook</h1>
        <ContactsForm onAddContact={this.handleAddContact} />
        <h2 className={css.contactsTitle}>Contacts</h2>
        <p className={css.contactsLabel}>Find contacts by name</p>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactsList contacts={filteredContacts} onDeleteContact={this.handleDeleteContact} />
      </div>
    );
  }
}

export default App;
