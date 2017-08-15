import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e74c3c;
  color: white;
  font-size: 24px;
  font-weight: 800;
  height: 100%;
`;

export default () => <Container>Oops, something went wrong!</Container>;
