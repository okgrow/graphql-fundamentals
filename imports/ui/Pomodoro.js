import React from 'react';
import { isActive, formatTime } from '../lib/pomodoroTimer';
import { gql, graphql } from 'react-apollo';
import { compose } from 'recompose';

class Pomodoro extends React.Component {
  constructor() {
    super();
    this.updateTime = this.updateTime.bind(this);
    this.renderCardInfo = this.renderCardInfo.bind(this);
    this.renderCardMembers = this.renderCardMembers.bind(this);
    this.state = { time: '' };
  }

  componentDidMount() {
    this.updateTime();
    if (isActive(this.props.pomodoro)) {
      this.timer = setInterval(this.updateTime, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateTime() {
    const { pomodoro } = this.props;
    this.setState({ time: formatTime(pomodoro) });
    if (!isActive(pomodoro)) {
      clearInterval(this.timer);
    }
  }

  renderCardMembers(members) {
    // don't render if no one is on the card
    if (members.length === 0) return null;
    return (
      <div>
        With: {
          members.map((member, i) =>
            // add a comma before all but the first name listed
            (i > 0 ? ', ' : '') + member.fullName
          )
        }
      </div>
    );
  }

  renderCardInfo(pomodoro) {
    const { cardName, trelloMembersOnCard } = pomodoro;
    // dont' render if there is no card
    if (!cardName) return null;
    return (
      <div>
        <div>{cardName}</div>
        {this.renderCardMembers(trelloMembersOnCard)}
      </div>
    );
  }

  render() {
    const deletePomodoro = this.props.mutate;
    const { pomodoro } = this.props;

    return (
      <li
        key={pomodoro._id}
        className={isActive(this.props.pomodoro) ? 'active' : ''}
      >
        <div>
          {pomodoro.goal} – {
            this.state.time
          }
          <button
            className="red"
            onClick={() => {
              deletePomodoro({ variables: { _id: pomodoro._id } });
            }}
          >
            Delete
          </button>
        </div>
        {this.renderCardInfo(pomodoro)}
      </li>
    );
  }
}

Pomodoro.propTypes = {
  pomodoro: React.PropTypes.shape({
    _id: React.PropTypes.string,
    goal: React.PropTypes.string,
    startDate: React.PropTypes.string,
  }),
  mutate: React.PropTypes.func,
};

// mutation setup
const mutation = gql`
  mutation deletePomodoro ($_id: String!){
    deletePomodoro (
      _id: $_id,
    )
  }
`;

// mutation config setup
const mutationConfig = {
  options: {
    refetchQueries: [
      'myPomodoros',
    ],
  },
};

// HOCs
const deletePomodoro = graphql(mutation, mutationConfig);

export default compose(deletePomodoro)(Pomodoro);
