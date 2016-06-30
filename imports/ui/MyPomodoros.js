import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React from 'react';
import Pomodoro from './Pomodoro';
import CreatePomodoro from './CreatePomodoro';

import { compose } from 'recompose';

const meteorHoc = fn =>
  component => createContainer(fn, component);

// We are expecting our data to come in as props.myPomodoros.pomodoros
// Note that props.myPomodoros has not only the pomodoros query results property,
// but will also contain other properties provided by apollo watchQuery,
// including error, loading, and several methods such as fetchMore() and refetch()
const MyPomodoros = (props) => {
  const { isLoggedIn } = props;
  // change the following to populate the query result as `pomodoros` in the app
  const pomodoros = null;

  // display only if logged-in
  return isLoggedIn &&
    <div>
      <CreatePomodoro />
      <ul>
        {pomodoros
          ? pomodoros.map((pomodoro) => (
            <Pomodoro
              key={pomodoro._id}
              pomodoro={pomodoro}
            />
          ))

          : <p>No Pomodoros yet</p>
        }
      </ul>
    </div>
};

MyPomodoros.propTypes = {
  isLoggedIn: React.PropTypes.bool.isRequired,
};

// HOCs

const isLoggedIn = meteorHoc(() => ({ isLoggedIn: !!Meteor.userId() }));

export default compose(isLoggedIn)(MyPomodoros);
