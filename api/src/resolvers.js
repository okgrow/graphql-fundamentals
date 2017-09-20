const resolvers = {
  Query: {
    hello: (root, args) => `Hello ${args.who || 'world'}!`,
    places: (root, args, { Place }) => Place.all({}),
    locationSuggestion: (root, { name }, { Location }) => Location.get(name),
  },
  Place: {
    location: (place, args, { Location }) => Location.get(place.name),
  },
  Location: {
    weather: ({ latitude, longitude }, args, context) => {
      return context.Weather.get({ latitude, longitude });
    },
  },
};

export default resolvers;
