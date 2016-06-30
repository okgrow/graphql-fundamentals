module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "no-extra-parens": 0, // Interferes with jsx
    "no-underscore-dangle": 0, // Mongo _id
    "react/prefer-stateless-function": 1, // We'll choose manually
    "react/prop-types": 1, // Slows down while prototyping / experimenting
    "max-len": 1, // Sometimes necessary to have long strings and not risk whitespace
    "no-param-reassign": [2, { "props": false }], // Allows assignment of new properties
    "no-multiple-empty-lines": 0, // temporarily disable this due to an Atom bug that shows error dialogs TODO remove this when Atom bug is fixed
    "graphql/template-strings": ['error', {
      // Import default settings for your GraphQL client. Supported values:
      // 'apollo', 'relay', 'lokka', 'literal'
      env: 'apollo',

      // Import your schema JSON here
      schemaJson: require('./schema.json'),

      // OR provide absolute path to your schema JSON
      // schemaJsonFilepath: path.resolve(__dirname, './schema.json'),

      // tagName is gql by default
    }],
  },
  "settings": {
    "import/resolver": "meteor",
  },
  plugins: [
    'graphql'
  ],
};
