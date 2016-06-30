import React from 'react';
import CardSelector from './CardSelector';

// Hardcoding this for the class.
const BOARD_ID = '561ac4943261be9e6bbd7ee1';


class CreatePomodoro extends React.Component {
  constructor() {
    super();

    // Initialize state
    this.state = {
      goalValue: '',
      goalError: true,
      card: { id: '', name: '' },
    };

    // Bind this so we can access this.state
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.isValid = this.isValid.bind(this);
    this.setCard = this.setCard.bind(this);
  }

  setCard(card) {
    this.setState({ card });
  }

  isValid(e) {
    // Stop double error checking on submit by enter key (onSubmit and onKeyUp)
    if (e && e.which === 13) return true;

    const goal = this.refs.goal.value;

    // Clear any previous erorrs
    this.setState({ goalError: '' });

    // Make sure we have a value
    if (!goal.trim()) {
      this.setState({ goalError: 'Please enter a goal' });
      return false;
    }
    return true;
  }

  handleSubmit(e) {
    // Prevent the browser from handling the form
    e.preventDefault();

    // Get the value of the goal input
    const goal = e.currentTarget.goal.value;

    // Make sure we have a value
    if (!this.isValid()) return;

    // Insert the pomodoro
    const newPomodoro = {
      goal,
      cardId: this.state.card.id,
      cardName: this.state.card.id ? this.state.card.name : '',
    };

    // TODO: Call the mutation to insert newPomodoro

    // Clear the input
    this.setState({ goalValue: '' });
  }

  handleGoalChange(e) {
    this.setState({ goalValue: e.currentTarget.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            id="goal"
            autoComplete="off"
            placeholder="Add a goal"
            ref="goal"
            value={this.state.goalValue}
            onChange={this.handleGoalChange}
            onKeyUp={this.isValid}
          />
          <button
            type="submit"
            disabled={this.state.goalError}
          >
            Add
          </button>
        </div>
        <CardSelector
          id={BOARD_ID}
          setCard={this.setCard}
        />
      </form>
    );
  }
}

// HOCs

/* createPomodoro mutation & HOC go here */

export default CreatePomodoro;
