const resolvers = {
  Query: {
    hello: (root, args) => `Hello ${args.who || 'world'}!`,
    places: (root, args, { Place }) => Place.all({}),
  },
  Place: {
    location: (place, args, { Location }) => Location.get(place.address),
  },
  Location: {
    weather: ({ latitude, longitude }, args, context) => {
      return context.Weather.get({ latitude, longitude });
    },
  },
};

export default resolvers;
