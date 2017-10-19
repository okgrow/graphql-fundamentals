import React from 'react';
import Autocomplete from 'react-autocomplete';
import styled from 'styled-components';
import { withState, withHandlers, compose } from 'recompose';
import { gql, graphql } from 'react-apollo';

const Input = ({
  setInputValue,
  addPlace,
  inputValue,
  data = { locationSuggestion: '' },
}) => {
  const { locationSuggestion = '' } = data;

  return (
    <Autocomplete
      wrapperStyle={styles.wrapper}
      inputProps={{ style: styles.input }}
      menuStyle={styles.menu}
      // open
      getItemValue={item => item.formattedAddress}
      items={[locationSuggestion]}
      renderItem={(item, isHighlighted) => (
        <Item isHighlighted={isHighlighted}>{item.formattedAddress}</Item>
      )}
      value={inputValue}
      shouldItemRender={(item, value) => item && value}
      onChange={event => setInputValue(event.target.value)}
      onSelect={(value, item) => addPlace(item.formattedAddress)}
    />
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
  },
  input: {
    width: '100%',
    padding: '1rem',
    height: '4rem',
    color: 'var(--darkBlue)',
    border: '.1rem solid var(--greyBlue)',
    borderRadius: '.2rem',
    fontSize: '2rem',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '.2rem',
    border: '.1rem dashed var(--greyBlue)',
  },
};

const Item = styled.div`
  cursor: pointer;
  margin: 0 0 0.2rem;
  padding: 0.2rem;
  font-size: 1.6rem;
  border: 0.1rem transparent;
  border-radius: 0.2rem;
  background: ${props =>
    props.isHighlighted ? 'var(--lightBlue)' : 'transparent'};
`;

const withInputState = withState('inputValue', 'setInputValue', '');

const createPlaceMutation = gql`
  mutation createPlace($input: CreatePlaceInput!) {
    createPlace(input: $input) {
      id
      name
      visited
    }
  }
`;

const withCreatePlaceMutation = graphql(createPlaceMutation, {
  options: props => ({
    refetchQueries: ['getPlaces'],
  }),
});

const withAddPlace = withHandlers({
  addPlace: props => async address => {
    // will call a mutation here
    await props.mutate({ variables: { input: { address } } });

    props.setInputValue('');
  },
});

const runSearchQuery = gql`
  query runSearch($search: String) {
    locationSuggestion(name: $search) {
      formattedAddress
    }
  }
`;

const withSuggestionsData = graphql(runSearchQuery, {
  options: props => ({
    variables: { search: props.inputValue },
  }),
});

export default compose(
  withInputState,
  withCreatePlaceMutation,
  withAddPlace,
  withSuggestionsData
)(Input);
