export default `
  type Place {
    id: ID!
    name: String!
    visited: Boolean
    latitude: Float
    longitude: Float
  }

  type Query {
    places: [Place]
  }
`;
