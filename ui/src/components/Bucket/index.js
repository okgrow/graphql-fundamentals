import React from 'react';
import Header from '../shared/Header';
import List from './List';
import styled from 'styled-components';

const Bucket = ({ places }) => (
  <FlexWrapper>
    <Header title="My places" />
    <List places={places} />
  </FlexWrapper>
);

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Bucket;
