import gql from 'graphql-tag';

export default gql`
  query getPlaces {
    places {
      id
      name
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
