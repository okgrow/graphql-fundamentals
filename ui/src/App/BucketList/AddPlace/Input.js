import React from 'react';

// import runSearchQuery from '../../../graphql/runSearchQuery';
import Autocomplete from './Autocomplete';

const Input = class extends React.Component {
  state = { inputValue: '' };

  handleOnChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleOnSelect = (value, item) => {
    this.props.addPlace(item.formattedAddress);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <Autocomplete
        suggestion={''}
        value={this.state.inputValue}
        onChange={this.handleOnChange}
        onSelect={this.handleOnSelect}
      />
    );
  }
};

export default Input;
