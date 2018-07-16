import gql from 'graphql-tag';

export default gql`
  mutation updatePlace($input: UpdatePlaceInput!) {
    updatePlace(input: $input) {
      id
      name
      visited
    }
  }
`;
