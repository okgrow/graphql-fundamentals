import { createApolloServer, addCurrentUserToContext } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import { PubSub, SubscriptionManager } from 'graphql-subscriptions';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { WebApp } from 'meteor/webapp';

import { typeDefs, resolvers } from '/imports/api/schema';


const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const pubsub = new PubSub();
const subscriptionManager = new SubscriptionManager({
  schema,
  pubsub,
});

new SubscriptionServer({
  subscriptionManager,
  // on connect subscription lifecycle event
  onConnect: async (connectionParams) => {
    // if a meteor login token is passed to the connection params from
    // the client, add the current user to the subscription context
    const subscriptionContext = connectionParams.meteorLoginToken
      ? await addCurrentUserToContext({}, connectionParams.meteorLoginToken)
      : {};

    return subscriptionContext;
  },
}, {
  // bind the subscription server to Meteor WebApp
  server: WebApp.httpServer,
  path: '/subscriptions',
});

createApolloServer({ schema });

export { pubsub };
