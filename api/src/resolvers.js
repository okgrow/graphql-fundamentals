const resolvers = {
  Query: {
    hello: (root, args) => `Hello ${args.who || 'world'}!`,
  },
};

export default resolvers;
