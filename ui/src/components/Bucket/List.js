import React from 'react';
import styled, { keyframes } from 'styled-components';
import { withHandlers, compose } from 'recompose';
import Input from './Input';
import Place from './Place';
import Button from '../shared/Button';

class List extends React.Component {
  render() {
    const { toggleVisited, places = [] } = this.props;
    return (
      <Container>
        <Input />

        {!places.length && <NoPlaces>No places in your bucket list!</NoPlaces>}

        {places.length && (
          <ItemList>
            {places.map(place => (
              <Item key={place.id}>
                <Place
                  id={place.id}
                  name={place.name}
                  visited={place.visited}
                  weather={place.location && place.location.weather}
                  toggleVisited={toggleVisited}
                />
                <Button
                  small
                  label="View on Map"
                  goTo={{ path: 'map', id: place.id }}
                />
              </Item>
            ))}
          </ItemList>
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

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;

  opacity: 0;
  animation: ${fadeIn} ease 0.4s forwards;
`;

const updatePlaceMutation = `
  mutation updatePlace($input: UpdatePlaceInput!) {
    updatePlace(input: $input) {
      id
      name
      visited
    }
  }
`;

const withToggleVisited = withHandlers({
  toggleVisited: props => placeId => {
    // call a mutation from the props
  },
});

export default compose(withToggleVisited)(List);
