import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import typeDefs from './typeDefs';
import mocks from './mocks';

const { TOKEN } = process.env;
const PORT = 8080;
const server = express();

server.use(cors());

server.use(bodyParser.json());

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks });

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

server.use('/api/autocomplete', async (req, res) => {
  const { name } = req.query;

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${name}&key=${TOKEN}`
  );

  const { predictions } = await response.json();

  return res.json(
    predictions.map(({ description, place_id }) => ({
      name: description,
      id: place_id,
    }))
  );
});

server.use('/api/details', async (req, res) => {
  const { id } = req.query;

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=${TOKEN}`
  );

  const { result } = await response.json();

  return res.json({
    id,
    name: result.name,
    latitude: result.geometry.location.lat,
    longitude: result.geometry.location.lng,
  });
});

server.listen(PORT, () => {
  console.log(`
[REST API]
Server is now running on http://localhost:${PORT}/api

[GRAPHQL API]
Server is now running on http://localhost:${PORT}/graphql
Explore it at: http://localhost:${PORT}/graphiql
`);
});
