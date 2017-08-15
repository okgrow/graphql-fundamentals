import React from 'react';
import PropTypes from 'prop-types';
import Header from '../shared/Header';
import List from './List';
import styled from 'styled-components';

const Bucket = ({
  editInput,
  addPlace,
  toggleVisited,
  places,
  inputValue,
  suggestions,
}) =>
  <FlexWrapper>
    <Header title="My places" />
    <List
      editInput={editInput}
      addPlace={addPlace}
      toggleVisited={toggleVisited}
      places={places}
      inputValue={inputValue}
      suggestions={suggestions}
    />
  </FlexWrapper>;

Bucket.propTypes = {
  editInput: PropTypes.func.isRequired,
  addPlace: PropTypes.func.isRequired,
  toggleVisited: PropTypes.func.isRequired,
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      visited: PropTypes.bool.isRequired,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    })
  ),
  inputValue: PropTypes.string,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Bucket;
