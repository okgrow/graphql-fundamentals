export default `
  type Place {
    id: ID!
    name: String!
    visited: Boolean
    latitude: Float
    longitude: Float
  }

  input CreatePlaceInput {
    placeId: ID!
  }

  input UpdatePlaceInput {
    id: ID!
    visited: Boolean!
  }

  type Query {
    places: [Place]
    suggestions(name: String): [Place]
  }

  type Mutation {
    createPlace(input: CreatePlaceInput!): Place!
    updatePlace(input: UpdatePlaceInput!): Place!
  }
`;
