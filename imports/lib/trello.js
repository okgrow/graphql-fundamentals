import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';
import rp from 'request-promise';

// set up oauth config for Meteor accounts system
const appKey = Meteor.settings.trello && Meteor.settings.trello.appKey;
const oauthSecret = Meteor.settings.trello && Meteor.settings.trello.oauthSecret;
ServiceConfiguration.configurations.upsert({ service: 'trello' }, {
  service: 'trello',
  // find these at: https://trello.com/app-key
  consumerKey: appKey,
  secret: oauthSecret,
  name: 'Cherry-Tomato Pomodoros',
  scope: 'read,write',
  expiration: 'never',
});


// set up REST calls
const BASE_URL = 'https://api.trello.com';
const API_VERSION = '1';

// Mix in the auth key/token for every request
// Currently we have to query the user tokens from the db.
const withAuth = (userId, options = {}) => {
  const user = Meteor.users.findOne({ _id: userId });
  return Object.assign({
    key: appKey,
    token: user && user.services.trello && user.services.trello.accessToken,
  }, options);
};

// Set up the options object for request-promise. This will return a
// promise which we can use with async/await.
// https://github.com/request/request-promise
const trello = (userId, path, args, method = 'GET') => ({
  uri: `${BASE_URL}/${API_VERSION}/${path}`,
  qs: withAuth(userId, args),
  headers: {
    'User-Agent': 'Request-Promise',
  },
  json: true,
  method,
});

// raw REST methods
const get = (userId, path, args) => rp(trello(userId, path, args));
const post = (userId, path, args) => rp(trello(userId, path, args, 'POST'));
const put = (userId, path, args) => rp(trello(userId, path, args, 'PUT'));
const del = (userId, path, args) => rp(trello(userId, path, args, 'DELETE'));

// convenience methods for some specific queries
const getMember = (userId, args) => get(userId, 'members/me', args);
const getBoards = (userId) => get(userId, 'members/me/boards');
const getLists = (userId, boardId) => get(userId, `boards/${boardId}/lists`);
const getCardsOnList = (userId, listId) => get(userId, `lists/${listId}/cards`);
const getCardMembers = (userId, cardId) => get(userId, `cards/${cardId}/members`);
// Note that these next two are not consistent in how they are called even though
// they do mirror versions of the same operation.
// XXX Ignoring errors because Trello throws an error if you
// try to leave a card you are not alreadyin.  Not production ready!
const addMemberToCard = async (userId, cardId) => {
  try {
    const user = await Meteor.users.findOne({ _id: userId });
    const memberId = user && user.services.trello && user.services.trello.id;
    if (!memberId) return [];
    return await post(userId, `cards/${cardId}/idMembers/`, { value: memberId });
  } catch (e) {
    return [];
  }
};
const removeMemberFromCard = async (userId, cardId) => {
  const user = await Meteor.users.findOne({ _id: userId });
  const memberId = user && user.services.trello && user.services.trello.id;
  if (!memberId) return [];
  try {
    return await del(userId, `cards/${cardId}/idMembers/${memberId}`);
  } catch (e) {
    return [];
  }
};

export default {
  get,
  post,
  put,
  del,
  getMember,
  getBoards,
  getLists,
  getCardsOnList,
  getCardMembers,
  addMemberToCard,
  removeMemberFromCard,
};
