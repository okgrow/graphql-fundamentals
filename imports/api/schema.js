import { Meteor } from 'meteor/meteor';
import PomodorosCollection from './PomodorosCollection';
import Trello from '../lib/trello';

export const typeDefs = [`
type Board {
  id: String!
  name: String!
  lists: [List]
}

type List {
  id: String!
  name: String!
}

type Card {
  id: String!
  name: String!
}

type Pomodoro {
  _id: ID!
  goal: String!
  startDate: String!
  cardId: String
  cardName: String
  trelloMembersOnCard: [TrelloMember]
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
  trelloBoards: [Board]
  trelloCardsFromList(id: String!): [Card]
  pomodoros: [Pomodoro]
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

    async pomodoros(root, args, context) {
      if (!context) return [];
      const { userId } = context;
      // only return logged-in user's pomodoros
      return await PomodorosCollection.find({ userId }, { sort: { startDate: -1 } }).fetch();
    },

    async trelloBoards(root, args, { userId }) {
      return await Trello.getBoards(userId);
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

  Board: {
    async lists({ id }, args, { userId }) {
      return await Trello.getLists(userId, id);
    },
  },

  Pomodoro: {
    async trelloMembersOnCard({ cardId }, _, { userId }) {
      if (!cardId) return [];
      return await Trello.getCardMembers(userId, cardId);
    },
  },
};
