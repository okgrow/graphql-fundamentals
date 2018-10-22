import { MongoClient } from 'mongodb';
import { ApolloServer } from 'apollo-server';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { Place, Location, Weather } from './model';

const PORT = 8080;
const MONGO_PORT = parseInt(PORT, 10) + 2;
const MONGO_URL = `mongodb://localhost:${MONGO_PORT}/database`;

const seedDb = async ({ db, Place }) => {
  const model = new Place(db);

  const places = await model.all({});

  if (places.length) {
    console.log('Database has entries.');
    return;
  }

  const seeds = [
    { name: 'San Francisco', visited: true },
    { name: 'Hawaii', visited: true },
    { name: 'Grand Canyon', visited: false },
  ];

  for (const seed of seeds) {
    await model.insert(seed);
  }

  console.log('Database seeded!');
};

const initServer = async () => {
  const db = await MongoClient.connect(MONGO_URL);

  await seedDb({ db, Place });

  const context = {
    Place: new Place(db),
    Location: new Location(),
    Weather: new Weather(),
  };

  const playground = {
    settings: {
      // REMOVE: explicitly setting cursorShape enables the cursor. This can be removed when
      // this issue is resolved: https://github.com/prismagraphql/graphql-playground/issues/790#issuecomment-409221277
      'editor.cursorShape': 'line',
    },
  };

  return new ApolloServer({ typeDefs, resolvers, context, playground });
};

// Start MongoDB and Apollo Server
initServer()
  .then(server => server.listen())
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch(e => {
    console.error('Uncaught error in startup');
    console.error(e);
    console.trace(e);
  });
