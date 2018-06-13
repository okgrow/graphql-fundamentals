export default `
  type Query {
    hello(who: String): String!
    places: [Place]
  }

  type Place {
    id: ID!
    name: String!
    visited: Boolean!
    location: Location!
  }

  type Location {
    latitude: Float!
    longitude: Float!
    weather: Weather!
  }

  type Weather {
    icon: String!
    temperature: Float!
  }
`;
