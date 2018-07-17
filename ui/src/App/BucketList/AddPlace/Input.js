import React from 'react';
import { Query } from 'react-apollo';

import runSearchQuery from '../../../graphql/runSearchQuery';
import Autocomplete from './Autocomplete';

const Input = class extends React.Component {
  state = { inputValue: '' };

  handleOnChange = event => {
    console.log(event.target.value);
    this.setState({ inputValue: event.target.value });
  };

  handleOnSelect = (value, item) => {
    this.props.addPlace(item.formattedAddress);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <Query
        query={runSearchQuery}
        variables={{ search: this.state.inputValue }}
      >
        {({ data }) => {
          const { locationSuggestion } = data;
          return (
            <Autocomplete
              suggestion={locationSuggestion}
              value={this.state.inputValue}
              onChange={this.handleOnChange}
              onSelect={this.handleOnSelect}
            />
          );
        }}
      </Query>
    );
  }
};

export default Input;
