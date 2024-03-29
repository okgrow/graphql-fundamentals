export default `
  type Query {
    hello(who: String): String!
    places: [Place]
    locationSuggestion(name: String): Location
  }

  type Mutation {
    createPlace(input: CreatePlaceInput!): Place!
    updatePlace(input: UpdatePlaceInput!): Place!
  }

  type Place {
    id: ID!
    address: String!
    visited: Boolean!
    location: Location!
  }

  type Location {
    formattedAddress: String!
    latitude: Float!
    longitude: Float!
    weather: Weather!
  }

  type Weather {
    icon: String!
    temperature: Float!
  }

  input CreatePlaceInput {
    address: String!
  }

  input UpdatePlaceInput {
    id: ID!
    visited: Boolean!
  }
`;
