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
  Mutation: {
    createPlace: async (_, { input: { address } }, { Place }) => {
      const doc = {
        name: address,
        visited: false,
      };

      const insertedId = await Place.insert(doc);

      const newPlace = await Place.findOneById(insertedId);

      return newPlace;
    },
    updatePlace: async (_, { input: { id, visited } }, { Place }) => {
      const doc = await Place.findOneById(id);

      await Place.updateById(id, {
        ...doc,
        visited,
      });

      const updatedPlace = await Place.findOneById(id);

      return updatedPlace;
    },
  },
};

export default resolvers;
