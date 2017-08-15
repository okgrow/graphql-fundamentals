import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import { pure } from 'recompose';
import Weather from './Weather';

const Place = ({ toggleVisited, id, visited, name, weather }) => {
  // console.log('rendering', name);
  return (
    <Cell onClick={() => toggleVisited(id)}>
      <NameContainer>
        <Icon visited={visited}>
          <StyledFontAwesome name={visited ? 'check-square' : 'square-o'} />
        </Icon>
        <Name>{name}</Name>
      </NameContainer>
      {weather && (
        <Weather icon={weather.icon} temperature={weather.temperature} />
      )}
    </Cell>
  );
};

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem;
  height: 6rem;
  background-color: var(--white);
  box-shadow: 0 0.2rem 0.4rem var(--shadow);
  border-radius: 0.2rem;
  border: 0.1rem solid var(--white);
  font-size: 2rem;
  transition: all 0.1s ease-out;
  &:active {
    opacity: 0.2;
    transition: all 0.1s ease-in;
  }

  &:focus {
    outline: none;
  }
`;

const NameContainer = styled.div`display: flex;`;

const Name = styled.div`
  font-size: 1.8rem;
  color: var(--grey);
`;

const Icon = styled.span`
  color: var(--${props => (props.visited ? 'paleGreen' : 'paleRed')});
`;

const StyledFontAwesome = styled(FontAwesome)`
  width: 2rem;
  margin-right: 2rem;
  transition: color 0.1s ease-in-out;
`;

export default pure(Place);
