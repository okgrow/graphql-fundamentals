import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


// Apollo config
import { meteorClientConfig, createMeteorNetworkInterface } from 'meteor/apollo';
import ApolloClient from 'apollo-client';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

const subcriptionsUrl = Meteor.absoluteUrl('subscriptions').replace(/^http/, 'ws');
const localStorageLoginToken = Meteor.isClient && Accounts._storedLoginToken();
const wsClient = new SubscriptionClient(subcriptionsUrl, {
  reconnect: true,
  connectionParams: {
    meteorLoginToken: localStorageLoginToken,
  },
});

const networkInterface = createMeteorNetworkInterface();

// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

// Finally, create your ApolloClient instance with the modified network interface
const client = new ApolloClient(meteorClientConfig({
  networkInterface: networkInterfaceWithSubscriptions,
}));


export { client };
