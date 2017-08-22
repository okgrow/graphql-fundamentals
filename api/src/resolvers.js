import fetch from 'node-fetch';

const resolvers = {
  Query: {
    places: async (_, args, { Place }) => {
      const places = await Place.all({});

      return places;
    },
    suggestions: async (_, args, context) => {
      // console.log(args);
      // console.log(context);
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${args.name}&key=${context.TOKEN}`
      );

      const { predictions } = await response.json();

      return predictions.map(({ description, place_id }) => ({
        name: description,
        id: place_id,
      }));
    },
  },
  Mutation: {
    createPlace: async (_, { input: { placeId } }, { Place, TOKEN }) => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${TOKEN}`
      );

      const { result } = await response.json();

      const doc = {
        name: result.name,
        visited: false,
        latitude: result.geometry.location.lat,
        longitude: result.geometry.location.lng,
      };

      const insertedId = await Place.insert(doc);

      const newPlace = await Place.findOneById(insertedId);

      return newPlace;
    },
  },
};

export default resolvers;
