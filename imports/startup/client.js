import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

// styles
import '../ui/main.css';

// Apollo config
import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';
const client = new ApolloClient(meteorClientConfig());

import App from '../ui/App';

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('render-target')
  );
});
