import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled, { keyframes } from 'styled-components';
import { pure } from 'recompose';
import Weather from './Weather';
import Button from '../../../../components/Button';

const Place = ({ place, toggleVisited }) => {
  const { id, visited, name, location } = place;
  const { weather } = location;
  return (
    <Item>
      <Cell onClick={() => toggleVisited(id)}>
        <Icon visited={visited}>
          <StyledFontAwesome name={visited ? 'check-square' : 'square-o'} />
        </Icon>

        <Name>{name}</Name>
      </Cell>
      {weather && (
        <Weather icon={weather.icon} temperature={weather.temperature} />
      )}
      <Button small label="View on Map" goTo={{ path: 'map', id: place.id }} />
    </Item>
  );
};

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  margin: 1rem;
  width: 16rem;
  height: 14rem;
  background: var(--peterRiver);
  border-radius: 1rem;
  transition: all 0.1s ease-out;
  &:active {
    opacity: 0.2;
    transition: all 0.1s ease-in;
  }
  &:focus {
    outline: none;
  }
`;

const Name = styled.div`
  font-size: 1.4rem;
  text-align: center;
  font-weight: 600;
  display: block;
  color: var(--clouds);
`;

const Icon = styled.span`
  display: block;
  color: var(--${props => (props.visited ? 'clouds' : 'belizeHole')});
`;

const StyledFontAwesome = styled(FontAwesome)`
  font-size: 4rem;
  transition: color 0.1s ease-in-out;
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Item = styled.div`
  flex-direction: row;
  opacity: 0;
  animation: ${fadeIn} ease 0.4s forwards;
  margin-bottom: 2rem;
`;

export default pure(Place);
