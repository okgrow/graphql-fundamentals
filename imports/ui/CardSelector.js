import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo-helpers';
import { compose } from 'recompose';

const CardSelector = ({ setCard, getCards: { trelloCardsFromList = [] } }) => {
  const handleChange = (e) => {
    const id = e.currentTarget.value;
    const name = e.currentTarget.options[e.currentTarget.selectedIndex].text;
    setCard({ id, name });
  };

  return (
    <select
      onChange={handleChange}
    >
      <option key="selectACard" value=""> No card selected </option>
      {trelloCardsFromList.map(({ name, id }) => (
        <option
          key={id}
          value={id}
        >
          {name}
        </option>
      ))}
    </select>
  );
};

CardSelector.propTypes = {
  getCards: React.PropTypes.object.isRequired,
  setCard: React.PropTypes.func.isRequired,
};

// HOCs
const getCards = graphql(gql`
  query getCards ($id: String!) {
    trelloCardsFromList (id: $id) {
      name
      id
    }
  }
`);

export default compose(getCards)(CardSelector);
