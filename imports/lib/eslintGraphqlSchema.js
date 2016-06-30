import { Meteor } from 'meteor/meteor';
import gql from 'graphql-tag';
import { introspectionQuery } from 'graphql';

import { client } from '../startup/apolloClient';
import eslintUpdateGraphqlSchema from './eslintUpdateGraphqlSchema';

Meteor.startup(async () => {
  if (Meteor.isDevelopment) {
    const schemaQueryResult = await client.query({
      query: gql`${introspectionQuery}`,
    });

    if (schemaQueryResult.data) {
      eslintUpdateGraphqlSchema.call(schemaQueryResult.data);
    }
  }
});
