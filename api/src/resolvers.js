import fetch from 'node-fetch';

const resolvers = {
  Query: {
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
