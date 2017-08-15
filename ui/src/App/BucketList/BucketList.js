import React from 'react';
import Header from '../../components/Header';
import AddPlace from './AddPlace/AddPlace';
import List from './List/List';
import styled from 'styled-components';

const BucketList = ({ places }) => (
  <FlexWrapper>
    <Header title="My places" />
    <Container>
      <Title>Add a new place</Title>
      <AddPlace />
      <List places={places} />
    </Container>
  </FlexWrapper>
);

const Title = styled.div`
  font-size: 2rem;
  font-family: Gaegu, sans-serif;
  text-indent: 1rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  max-width: 120rem;
  width: 60vw;
  background-color: white;
  border-radius: 1rem;
  border: 2px solid #eee;
  padding-bottom: 0rem;
`;

export default BucketList;
