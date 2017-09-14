import fetch from 'node-fetch';

const resolvers = {
  Query: {
    places: () => [
      {
        id: 'c92g93mthh8zhx6f3f58qhgbom2hy2',
        name: 'Toronto',
        visited: true,
        latitude: 43.653908,
        longitude: -79.384293,
      },
      {
        id: 'z7akz06dau5iw95ykqqptidi3ccnqr',
        name: 'Niagara Falls',
        visited: false,
        latitude: 43.092461,
        longitude: -79.04715,
      },
      {
        id: 'm3e8xlm1kox4jsjat87reqgj1jrn0x',
        name: 'Grand Canyon',
        visited: false,
        latitude: 36.105976,
        longitude: -112.094794,
      },
    ],
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
};

export default resolvers;
