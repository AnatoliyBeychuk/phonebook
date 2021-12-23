import { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { Container, Field } from "./ContactForm.styled";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    isInputNameEmpty: true,
    isInputNumberEmpty: true,
  };

  handleChange = (value, tag, name) => {
    this.setState({ [name]: value, [tag]: !value.trim() });
  };

  onAddContact = (callback) => {
    callback({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({
      name: "",
      number: "",
      isInputNameEmpty: true,
      isInputNumberEmpty: true,
    });
  };

  render() {
    const { handleAddContact } = this.props;
    const { isInputNameEmpty, isInputNumberEmpty, name, number } = this.state;
    return (
      <Container>
        <Field>
          <label>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={(event) => {
              const { value, name } = event.target;
              this.handleChange(value, "isInputNameEmpty", name);
            }}
            value={name}
          />
        </Field>

        <Field>
          <label>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={(event) => {
              const { value, name } = event.target;
              this.handleChange(value, "isInputNumberEmpty", name);
            }}
            value={number}
          />
        </Field>

        <button
          type="button"
          name="add"
          onClick={() => this.onAddContact(handleAddContact)}
          disabled={isInputNameEmpty || isInputNumberEmpty}
        >
          Add contact
        </button>
      </Container>
    );
  }
}

ContactForm.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
