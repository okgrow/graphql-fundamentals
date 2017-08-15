import React from 'react';
import PropTypes from 'prop-types';
import Header from '../shared/Header';
import Button from '../shared/Button';
import SimpleMap from './SimpleMap';
import styled from 'styled-components';

const Map = ({ places, currentPlace }) =>
  <FlexColumn>
    <Header title={currentPlace.name} />
    <Button label="Back to the Bucket" goTo={{ path: 'bucket' }} small />
    <SimpleMap
      containerElement={<div style={styles.container} />}
      mapElement={<div style={styles.map} />}
      currentPlace={currentPlace}
      places={places}
    />
  </FlexColumn>;

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

Map.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      visited: PropTypes.bool.isRequired,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    })
  ).isRequired,
  currentPlace: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    visited: PropTypes.bool.isRequired,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }).isRequired,
};

export default Map;
