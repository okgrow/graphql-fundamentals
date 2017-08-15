import React from 'react';
import Header from '../../components/Header';
import AddPlace from './AddPlace/AddPlace';
import List from './List/List';
import styled from 'styled-components';

const BucketList = ({ places }) => (
  <FlexWrapper>
    <Header title="My places" />
    <Container>
      <AddPlace />
      <List places={places} />
    </Container>
  </FlexWrapper>
);

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
`;

export default BucketList;
