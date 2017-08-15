import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';
import styled from 'styled-components';

const Input = ({ editInput, addPlace, inputValue, suggestions = [] }) =>
  <Autocomplete
    wrapperStyle={styles.wrapper}
    inputProps={{ style: styles.input }}
    menuStyle={styles.menu}
    // open
    getItemValue={item => item.name}
    items={suggestions}
    renderItem={(item, isHighlighted) =>
      <Item isHighlighted={isHighlighted}>
        {item.name}
      </Item>}
    value={inputValue}
    shouldItemRender={(item, value) =>
      item && value && item.name.toLowerCase().includes(value.toLowerCase())}
    onChange={editInput}
    onSelect={(value, item) => addPlace(item.id)}
  />;

Input.propTypes = {
  editInput: PropTypes.func.isRequired,
  addPlace: PropTypes.func.isRequired,
  value: PropTypes.string,
};

//
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
  },
  input: {
    width: '100%',
    padding: '1rem',
    height: '4rem',
    color: 'var(--darkBlue)',
    border: '.1rem solid var(--greyBlue)',
    borderRadius: '.2rem',
    fontSize: '2rem',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '.2rem',
    border: '.1rem dashed var(--greyBlue)',
  },
};

const Item = styled.div`
  cursor: pointer;
  margin: 0 0 .2rem;
  padding: .2rem;
  font-size: 1.6rem;
  border: .1rem transparent;
  border-radius: .2rem;
  background: ${props =>
    props.isHighlighted ? 'var(--lightBlue)' : 'transparent'};
`;

export default Input;
