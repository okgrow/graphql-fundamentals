import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import styled from 'styled-components';

const Button = ({ label, goTo, small, history }) =>
  <Clickable
    small={small}
    onClick={() => {
      history.push(`/${goTo.path}${goTo.id ? `/${goTo.id}` : ''}`);
    }}
  >
    <Label small={small}>
      {label.toUpperCase()}
    </Label>
  </Clickable>;

const Clickable = styled.button`
  border: .1rem solid var(--transparentDarkBlue);
  border-radius: 6rem;
  background-color: var(--transparentDarkBlue);
  padding: ${props => (props.small ? '1rem 2rem' : '2rem 4rem')};
  cursor: pointer;
  transition: border .25s ease-out, background .25s ease-out;
  align-self: center;

  &:hover {
    background-color: var(--darkBlue);
    border-color: var(--darkBlue);
    transition: border .25s ease-in, background .25s ease-in;
  }

  &:focus {
    outline: none;
  }
`;

const Label = styled.span`
  font-size: ${props => (props.small ? 1.5 : 5)}rem;
  font-weight: bold;
  letter-spacing: ${props => (props.small ? 0.2 : 0.5)}rem;
  text-align: center;
  color: var(--paleBlue);
`;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  goTo: PropTypes.shape({
    path: PropTypes.string.isRequired,
    id: PropTypes.string,
  }).isRequired,
  small: PropTypes.bool,
};

export default withRouter(Button);
