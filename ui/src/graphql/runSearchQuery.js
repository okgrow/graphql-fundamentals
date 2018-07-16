import gql from 'graphql-tag';

export default gql`
  query runSearch($search: String) {
    locationSuggestion(name: $search) {
      formattedAddress
    }
  }
`;
