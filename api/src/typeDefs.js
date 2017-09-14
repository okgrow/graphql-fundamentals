export default `
  type Place {
    id: ID!
    name: String!
    visited: Boolean
    latitude: Float
    longitude: Float
  }

  input CreatePlaceInput {
    suggestionId: ID!
  }

  type Query {
    places: [Place]
    suggestions(name: String): [Place]
  }

  type Mutation {
    createPlace(input: CreatePlaceInput!): Place!
  }
`;
