import { Accounts } from 'meteor/accounts-base';

// Code to insert our demo data into a Meteor collection
import PomodorosCollection from '../api/PomodorosCollection';
import pomodorosData from '../api/pomodorosData';

Accounts.onCreateUser((options, user) => {
  // insert demo data omitting the _id field.
  pomodorosData
    .map((pomodoro) => Object.assign(pomodoro, { userId: user._id }))
    .forEach((pomodoro) => PomodorosCollection.insert(pomodoro));
  return user;
});
