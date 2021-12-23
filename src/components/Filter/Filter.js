import { Component } from "react";
import PropTypes from "prop-types";
import { Field } from "./Filter.styled";

class Filter extends Component {
  // state = {
  //   filter: "",
  // };

  handleChange = (value, name, callback) => {
    // this.setState((prevState) => {
    //   return { ...prevState, [name]: value };
    // });
    callback(value, name);
  };

  render() {
    const { filter, handleInputChange } = this.props;
    // const { filter } = this.state;
    return (
      <Field>
        <span>Find contacts by name</span>
        <input
          type="search"
          name="filter"
          required
          onChange={(event) => {
            const { value, name } = event.target;
            this.handleChange(value, name, handleInputChange);
          }}
          value={filter}
        />
      </Field>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Filter;
