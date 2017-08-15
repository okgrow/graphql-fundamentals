// Remove the mocks variable once we connect to the db
const mocks = [
  { id: '1', name: 'Santa Fe', visited: true },
  { id: '2', name: 'Boulder', visited: true },
  { id: '3', name: 'Yellowstone', visited: false },
];

const resolvers = {
  Query: {
    hello: (root, args) => `Hello ${args.who || 'world'}!`,
    // EX 1: add code here
  },
};

export default resolvers;
