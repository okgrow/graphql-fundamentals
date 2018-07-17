import React from 'react';
import Autocomplete from 'react-autocomplete';
import styled from 'styled-components';
import shortid from 'shortid';

const LocationAutocomplete = ({ suggestion, value, onChange, onSelect }) => (
  <Autocomplete
    wrapperStyle={styles.wrapper}
    inputProps={{ style: styles.input }}
    menuStyle={styles.menu}
    getItemValue={item => item.formattedAddress}
    items={[suggestion]}
    renderItem={(item, isHighlighted) => (
      <Item key={shortid.generate()} isHighlighted={isHighlighted}>
        {item.formattedAddress}
      </Item>
    )}
    value={value}
    shouldItemRender={(item, value) => item && value}
    onChange={onChange}
    onSelect={onSelect}
  />
);

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
    border: '2px solid #eee',
    borderRadius: '0.75rem',
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
  margin: 0 0 0.2rem;
  padding: 0.2rem;
  font-size: 1.6rem;
  border: 0.1rem transparent;
  border-radius: 0.2rem;
  background: ${props =>
    props.isHighlighted ? 'var(--lightBlue)' : 'transparent'};
`;

export default LocationAutocomplete;
