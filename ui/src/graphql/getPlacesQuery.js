import gql from 'graphql-tag';

export default gql`
  query getPlaces {
    places {
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
