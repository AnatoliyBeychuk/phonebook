import { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  handleInputChange = (value, name) => {
    this.setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  handleAddContact = () => {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: prevState.name, number: prevState.number },
        ],
        name: "",
        number: "",
      };
    });
  };

  render() {
    const { contacts, name, number } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          inputNameValue={name}
          inputNumberValue={number}
          handleInputChange={this.handleInputChange}
          handleAddContact={this.handleAddContact}
        />
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
