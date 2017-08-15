import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import InfoDisk from './InfoDisk';
import Button from '../shared/Button';
import styled from 'styled-components';

const Home = ({ places }) =>
  <FlexWrapper>
    <Title>The Bucket List</Title>
    <InfoDisk count={places.length} />
    <Button label="Explore" goTo={{ path: 'bucket' }} />
  </FlexWrapper>;

Home.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      visited: PropTypes.bool.isRequired,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    })
  ),
};

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background-image: linear-gradient(
    135deg,
    var(--gradientGold) 10%,
    var(--gradientBlue) 100%
  );
`;

export default Home;
