import { Component } from "react";
import "./App.css";
import { Container } from "./App.styled";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  handleInputChange = (value, name) => {
    this.setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  onContactsFilter = (array, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return array.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  findDuplicateContact = (array, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return array.filter(
      (contact) => contact.name.toLowerCase() === normalizedFilter
    );
  };

  handleAddContact = (contact) => {
    this.setState((prevState) => {
      const { name } = contact;
      const { contacts } = prevState;
      const filteredArray = this.findDuplicateContact(contacts, name);
      if (filteredArray.length > 0) {
        alert(`${name} is already in contacts.`);
      } else {
        return {
          contacts: [...prevState.contacts, contact],
        };
      }
    });
  };

  deleteContact = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredArray = this.onContactsFilter(contacts, filter);

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleInputChange={this.handleInputChange} />
        <ContactList
          contacts={filteredArray}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
