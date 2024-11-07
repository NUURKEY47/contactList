import React, { useState } from 'react';
import './App.css'; // Link to the CSS file

function ContactListApp() {
  // State to store contacts
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Function to add a new contact
  const addContact = () => {
    if (name.trim() !== '' && phone.trim() !== '') {
      const newContact = {
        id: Date.now(),
        name: name,
        phone: phone,
      };
      setContacts([...contacts, newContact]);
      setName(''); // Clear name input field
      setPhone(''); // Clear phone input field
    }
  };

  // Function to remove a contact
  const removeContact = (contactId) => {
    const updatedContacts = contacts.filter(contact => contact.id !== contactId);
    setContacts(updatedContacts);
  };

  return (
    <div className="contact-container">
      <h1>Contact List Manager</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="name-input"
        />
        <input
          type="text"
          placeholder="Enter phone number..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="phone-input"
        />
        <button onClick={addContact} className="add-contact-button">Add Contact</button>
      </div>

      <ul className="contact-list">
        {contacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            <span>{contact.name} - {contact.phone}</span>
            <button onClick={() => removeContact(contact.id)} className="remove-contact-button">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactListApp;