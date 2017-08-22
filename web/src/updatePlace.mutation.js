import { gql } from 'react-apollo';

export default gql`
  mutation updatePlace($input: UpdatePlaceInput!) {
    updatePlace(input: $input) {
      id
      name
      visited
      longitude
      latitude
    }
  }
`;
