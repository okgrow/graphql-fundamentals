import gql from 'graphql-tag';

export default gql`
  mutation createPlace($input: CreatePlaceInput!) {
    createPlace(input: $input) {
      id
      address
      visited
      location {
        latitude
        longitude
        weather {
          icon
          temperature
        }
      }
    }
  }
`;
