const resolvers = {
  Query: {
    hello: (root, args) => `Hello ${args.who || 'world'}!`,
    places: (root, args, { Place }) => Place.all({}),
  },
  Place: {
    location: (place, args, { Location }) => Location.get(place.name),
  },
};

export default resolvers;
