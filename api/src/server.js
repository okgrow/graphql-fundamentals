import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';
import { MongoClient } from 'mongodb';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const { TOKEN } = process.env;
const PORT = 8080;
const MONGO_PORT = 27017;
const MONGO_URL = `mongodb://localhost:${MONGO_PORT}/database`;

const startServer = async () => {
  // uncomment if a database is started
  // const db = await MongoClient.connect(MONGO_URL);

  const server = express();

  server.use(cors());

  server.use(bodyParser.json());

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  server.use(
    '/graphql',
    graphqlExpress(req => ({
      schema,
    }))
  );

  server.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql',
    })
  );

  server.use('/api/autocomplete', async (request, response) => {
    const { name } = request.query;

    const googleResponse = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${name}&key=${TOKEN}`
    );

    const { predictions } = await googleResponse.json();

    return response.json(
      predictions.map(({ description, place_id }) => ({
        name: description,
        id: place_id,
      }))
    );
  });

  server.use('/api/details', async (request, response) => {
    const { id } = request.query;

    const googleResponse = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=${TOKEN}`
    );

    const { result } = await googleResponse.json();

    return response.json({
      id,
      name: result.name,
      latitude: result.geometry.location.lat,
      longitude: result.geometry.location.lng,
    });
  });

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
