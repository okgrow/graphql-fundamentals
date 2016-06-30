import React from 'react';
import { gql, graphql } from 'react-apollo';
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

// query setup
const query = gql`
  query getCards ($id: String!) {
    trelloCardsFromList (id: $id) {
      id
      name
    }
  }
`;

// query config setup
const queryConfig = {
  props: ({ data: { trelloCardsFromList = [] } }) => ({
    getCards: { trelloCardsFromList },
  }),
  options: ({ id }) => ({
    variables: { id },
  }),
};

// HOCs
const getCards = graphql(query, queryConfig);

export default compose(getCards)(CardSelector);
