import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import typeDefs from './typeDefs';
import mocks from './mocks';
import resolvers from './resolvers';

const { TOKEN } = process.env;
const PORT = 8080;
const server = express();

server.use(cors());

server.use(bodyParser.json());

const schema = makeExecutableSchema({ typeDefs, resolvers });

addMockFunctionsToSchema({ schema, mocks, preserveResolvers: true });

server.use(
  '/graphql',
  graphqlExpress(req => ({
    schema,
    context: { TOKEN },
  }))
);

server.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  })
);

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
