import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { Place, Location, Weather } from './model';

const PORT = 8080;
const MONGO_PORT = parseInt(PORT, 10) + 2;
const MONGO_URL = `mongodb://localhost:${MONGO_PORT}/database`;

const startServer = async () => {
  const db = await MongoClient.connect(MONGO_URL);

  await seedDb({ db, Place });

  const server = express();

  server.use(cors());

  server.use(bodyParser.json());

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  server.use(
    '/graphql',
    graphqlExpress(req => ({
      schema,
      context: {
        Place: new Place(db)
      }
    }))
  );

  server.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql'
    })
  );

  server.listen(PORT, () => {
    console.log(
      `Server is now running on http://localhost:${PORT}/graphql ;
Explore it at http://localhost:${PORT}/graphiql`
    );
  });
};

startServer()
  .then(() => {
    console.log('All systems go');
  })
  .catch(e => {
    console.error('Uncaught error in startup');
    console.error(e);
    console.trace(e);
  });

const seedDb = async ({ db, Place }) => {
  const model = new Place(db);

  const places = await model.all({});

  if (places.length) {
    console.log('Database has entries.');
    return;
  }

  const seeds = [
    { name: 'San Francisco', visited: true },
    { name: 'Toronto', visited: true },
    { name: 'Grand Canyon', visited: false }
  ];

  for (const seed of seeds) {
    await model.insert(seed);
  }

  console.log('Database seeded!');
};
