import React from 'react';
import Title from './Title';
import InfoDisk from './InfoDisk';
import Button from '../../components/Button';
import styled from 'styled-components';

const Home = ({ places }) => (
  <Container>
    <Wrapper>
      <Title>My Bucket List</Title>
      <InfoDisk count={places.length} />
      <Button label="Explore" goTo={{ path: 'bucket' }} />
    </Wrapper>
  </Container>
);

const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 5rem 5rem 7rem 5rem;
  border-radius: 1rem;
  border: 3px solid #eee;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default Home;
