import React from 'react';
import styled from 'styled-components';
import { pure } from 'recompose';

const Weather = ({ icon, temperature }) => (
  <Container>
    <Icon>{icon}</Icon> <Temperature>{temperature}</Temperature>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-end;
  width: 16rem;
  margin: -2rem 1rem 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: var(--belizeHole);
`;

const Icon = styled.div`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-size: 3rem;
  text-align: center;
`;

const Temperature = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--clouds);
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default pure(Weather);
