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
`;

const Icon = styled.div`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-size: 3rem;
`;

const Temperature = styled.div`
   display: flex;
   flex: 1;
   flex-direction: row;
   align-items: center
   ;
}
  width: 6rem;
`;

export default pure(Weather);
