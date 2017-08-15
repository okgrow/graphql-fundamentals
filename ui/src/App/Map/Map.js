import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SimpleMap from './SimpleMap';
import styled from 'styled-components';

const Map = ({ places, currentPlace }) => (
  <FlexColumn>
    <Header title={currentPlace ? currentPlace.name : 'Place not found'} />
    <Button label="Back to the Bucket" goTo={{ path: 'bucket' }} small />
    {currentPlace ? (
      <SimpleMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
          process.env.REACT_APP_GOOGLE_API_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={styles.container} />}
        mapElement={<div style={styles.map} />}
        currentPlace={currentPlace}
        places={places}
      />
    ) : null}
  </FlexColumn>
);

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const styles = {
  container: {
    margin: '5vw',
    border: '1rem solid var(--lightBlue)',
    borderRadius: '1rem',
    width: '90vw',
    height: '60vh',
  },
  map: {
    height: '100%',
  },
};

export default Map;
