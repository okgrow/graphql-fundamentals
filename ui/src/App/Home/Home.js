import React from 'react';
import Title from './Title';
import InfoDisk from './InfoDisk';
import Button from '../../components/Button';
import styled from 'styled-components';

const Home = ({ places }) => (
  <FlexWrapper>
    <Title>The Bucket List</Title>
    <InfoDisk count={places.length} />
    <Button label="Explore" goTo={{ path: 'bucket' }} />
  </FlexWrapper>
);

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
