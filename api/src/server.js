import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { MongoClient } from 'mongodb';

import typeDefs from './typeDefs';
import mocks from './mocks';
import resolvers from './resolvers';
import Place from './model';

const { TOKEN } = process.env;
const PORT = 8080;
const MONGO_PORT = 27017;
const MONGO_URL = `mongodb://localhost:${MONGO_PORT}/database`;

const startServer = async () => {
  const db = await MongoClient.connect(MONGO_URL);

  const server = express();

  server.use(cors());

  server.use(bodyParser.json());

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  addMockFunctionsToSchema({ schema, mocks, preserveResolvers: true });

  server.use(
    '/graphql',
    graphqlExpress(req => ({
      schema,
      context: {
        TOKEN,
        Place: new Place(db),
      },
    }))
  );

  server.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql',
    })
  );

  // server.use('/api/details', async (req, res) => {
  //   const { id } = req.query;

  //   const response = await fetch(
  //     `https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=${TOKEN}`
  //   );

  //   const { result } = await response.json();

  //   return res.json({
  //     id,
  //     name: result.name,
  //     latitude: result.geometry.location.lat,
  //     longitude: result.geometry.location.lng,
  //   });
  // });

  server.listen(PORT, () => {
    console.log(
      `Server is now running on http://localhost:${PORT}/graphql ; Explore it at http://localhost:${PORT}/graphiql`
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
