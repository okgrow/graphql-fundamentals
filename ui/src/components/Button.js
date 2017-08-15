import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

const Button = ({ label, goTo, small, history }) => (
  <Clickable
    small={small}
    onClick={() => {
      history.push(`/${goTo.path}${goTo.id ? `/${goTo.id}` : ''}`);
    }}
  >
    <Label small={small}>{label}</Label>
  </Clickable>
);

const Clickable = styled.button`
  padding-right: 50px;
  padding-left: 2rem;
  height: 42px;
  background: var(--peterRiver);
  border: none;
  border-radius: 0.75rem;
  position: relative;
  border-bottom: 4px solid #2b8bc6;
  color: #fbfbfb;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.4rem;
  text-align: left;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: block;
  margin: 0 auto;
  min-width: 16rem;
  :active {
    box-shadow: 0px 0px 0px 0px rgb(0, 0, 0);
    top: 3px;
  }
  :after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    border-top: 21px solid var(--belizeHole);
    border-bottom: 21px solid var(--belizeHole);
    border-left: 16px solid transparent;
    border-right: 21px solid var(--belizeHole);
    position: absolute;
    opacity: 0.5;
    right: 0;
    top: 0;
    border-radius: 0 0.75rem 0.75rem 0;
  }
  &:focus {
    outline: none;
  }
`;

const Label = styled.span`
  font-size: 1.4rem;
  line-height: 38px;
  font-weight: bold;
  color: var(--paleBlue);
`;

export default withRouter(Button);
