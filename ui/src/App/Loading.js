import React from 'react';
import styled from 'styled-components';
import Spinner from 'react-spinkit';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  height: 100%;
`;

export default () => (
  <Container>
    <Spinner name="ball-beat" fadeIn="none" />
  </Container>
);
