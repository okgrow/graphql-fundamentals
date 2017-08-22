import { gql } from 'react-apollo';

export default gql`
  mutation createPlace($input: CreatePlaceInput!) {
    createPlace(input: $input) {
      id
      name
      visited
      longitude
      latitude
    }
  }
`;
