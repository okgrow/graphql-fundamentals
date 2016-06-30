import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

// get graphql schema for linting (dev only)
import '../lib/eslintGraphqlSchema';

// styles
import '../ui/main.css';

import { ApolloProvider } from 'react-apollo';
import { client } from './apolloClient';

import App from '../ui/App';

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('render-target')
  );
});
