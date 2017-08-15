import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import { pure } from 'recompose';

const Place = ({ toggleVisited, id, visited, name }) => {
  // console.log('rendering', name);
  return (
    <Cell onClick={() => toggleVisited(id)}>
      <Icon visited={visited}>
        <StyledFontAwesome name={visited ? 'check-square' : 'square-o'} />
      </Icon>
      <Name>
        {name}
      </Name>
    </Cell>
  );
};

Place.propTypes = {
  toggleVisited: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  visited: PropTypes.bool.isRequired,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

const Cell = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  height: 6rem;
  background-color: var(--white);
  box-shadow: 0 .2rem .4rem var(--shadow);
  border-radius: .2rem;
  border: .1rem solid var(--white);
  font-size: 2rem;
  transition: all .1s ease-out;
  &:active {
    opacity: .2;
    transition: all .1s ease-in;
  }

  &:focus {
    outline: none;
  }
`;

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
  transition: color .1s ease-in-out;
`;

export default pure(Place);
