import { Component } from "react";

class ContactForm extends Component {
  state = {
    isInputNameEmpty: true,
    isInputNumberEmpty: true,
  };

  handleChange = (value, name, tag, callback) => {
    this.setState((prevState) => {
      return !value.trim()
        ? { ...prevState, [tag]: true }
        : { ...prevState, [tag]: false };
    });
    callback(value, name);
  };

  onAddContact = (callback) => {
    callback();
    this.setState({ isInputNameEmpty: true, isInputNumberEmpty: true });
  };

  render() {
    const {
      inputNameValue,
      inputNumberValue,
      handleInputChange,
      handleAddContact,
    } = this.props;
    const { isInputNameEmpty, isInputNumberEmpty } = this.state;
    return (
      <>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={(event) => {
            const { value, name } = event.target;
            this.handleChange(
              value,
              name,
              "isInputNameEmpty",
              handleInputChange
            );
          }}
          value={inputNameValue}
        />

        <label>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={(event) => {
            const { value, name } = event.target;
            this.handleChange(
              value,
              name,
              "isInputNumberEmpty",
              handleInputChange
            );
          }}
          value={inputNumberValue}
        />

        <button
          type="button"
          name="add"
          onClick={() => this.onAddContact(handleAddContact)}
          disabled={isInputNameEmpty || isInputNumberEmpty}
        >
          Add contact
        </button>
      </>
    );
  }
}

export default ContactForm;
