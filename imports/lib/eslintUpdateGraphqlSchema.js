// This method writes the GraphQL schema to a file. The schema is queried by the client
// and sent to the server so the file can be written. This will update every time you change
// your code (and will execute one time for every client you have open, which is not ideal).
// Once the file is written, eslint-plugin-graphql can lint your gql`` queries vs. your schema.
// As long as you keep your dev server running, it will stay up-to-date as you change your
// schema, but be aware that it will not update if the dev server is not running!

import * as path from 'path';
import { writeFile } from 'jsonfile';

import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

const FILE_NAME = 'schema.json';

export default new ValidatedMethod({
  name: 'eslintUpdateGraphqlSchema',
  validate: null,

  run(schema) {
    if (!Meteor.isDevelopment) {
      throw new Meteor.Error('dev-only',
        'eslintUpdateGraphqlSchema only works in development.');
    }

    if (!this.isSimulation) {
      try {
        const rootDir = /(.+)\.meteor/.exec(process.cwd())[1];
        const filePath = path.join(rootDir, FILE_NAME);
        console.log(`Writing schema file for eslint-plugin-graphql:
          ${filePath}`
      );
        writeFile(filePath, schema, { spaces: 2 },
          err => err && console.log(err));
      } catch (err) {
        console.log(`Unable to create ${FILE_NAME}: ${err}`);
      }
    }
  },
});
