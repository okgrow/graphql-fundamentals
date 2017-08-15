import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Place from './Place';
import Button from '../shared/Button';
import styled from 'styled-components';

class List extends React.Component {
  render() {
    const {
      editInput,
      addPlace,
      toggleVisited,
      places = [],
      inputValue,
      suggestions,
    } = this.props;

    return (
      <Container>
        <Input
          inputValue={inputValue}
          editInput={editInput}
          addPlace={addPlace}
          suggestions={suggestions}
        />

        {!places.length && <NoPlaces>No places in your bucket list!</NoPlaces>}

        {places.map(place =>
          <Item key={place.id}>
            <Place
              id={place.id}
              name={place.name}
              visited={place.visited}
              toggleVisited={toggleVisited}
            />
            <Button
              small
              label="View on Map"
              goTo={{ path: 'map', id: place.id }}
            />
          </Item>
        )}
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  max-width: 120rem;
  width: 60vw;
`;

const NoPlaces = styled.div`
  text-align: center;
  font-size: 3rem;
  color: var(--darkBlue);
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
`;

List.propTypes = {
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

export default List;
