import { Meteor } from 'meteor/meteor';
import gql from 'graphql-tag';
import { introspectionQuery } from 'graphql';

import { client } from './client';
import updateEslintGraphqlSchema from './updateEslintGraphqlSchema';

Meteor.startup(async () => {
  if (Meteor.isDevelopment) {
    const schemaQueryResult = await client.query({
      query: gql`${introspectionQuery}`,
    });

    if (schemaQueryResult.data) {
      updateEslintGraphqlSchema.call(schemaQueryResult.data);
    }
  }
});

