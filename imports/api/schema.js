import { Meteor } from 'meteor/meteor';
import PomodorosCollection from './PomodorosCollection';
import Trello from '../lib/trello';

export const typeDefs = [`
type Card {
  id: String!
  name: String!
}

# Meteor user, which includes some of the user's Trello user info
type User {
  # This is the Meteor ID in MongoDB
  _id: ID
  trello: TrelloMember
}

# User Trello account info
type TrelloMember {
  id: String!
  fullName: String
  initials: String
  username: String
}

type Query {
  user: User
  trelloCardsFromList(id: String!): [Card]
}

schema {
  query: Query
}
`];

export const resolvers = {
  Query: {
    async user(root, args, context) {
      // Only return the current user, for security
      if (context.userId) {
        // await console.log(Meteor.users.findOne(context.userId));
        return await Meteor.users.findOne(context.userId);
      }
      return null;
    },

    async trelloCardsFromList(root, { id }, context) {
      if (!context) return [];
      const { userId } = context;
      return await Trello.getCardsOnList(userId, id);
    },
  },

  User: {
    trello: user => (user ? user.services.trello : { id: '' }),
  },
};
