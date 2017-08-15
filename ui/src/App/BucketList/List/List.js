import React from 'react';
import styled from 'styled-components';

import Place from './Place/Place';

class List extends React.Component {
  render() {
    const { places = [] } = this.props;
    if (!places.length) {
      return <NoPlaces>No places in your bucket list!</NoPlaces>;
    }
    return (
      <ItemList>
        {places.map(place => <Place place={place} key={place.id} />)}
      </ItemList>
    );
  }
}

const NoPlaces = styled.div`
  text-align: center;
  font-size: 3rem;
  color: var(--darkBlue);
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export default List;
