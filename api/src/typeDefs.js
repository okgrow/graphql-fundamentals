export default `
  type Query {
    hello(who: String): String!
    places: [Place]
  }

  type Place {
    id: ID!
    name: String!
    visited: Boolean!
  }
`;
