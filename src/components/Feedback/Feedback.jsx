import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    if (e.target.innerText === 'Good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    }
    if (e.target.innerText === 'Neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    }
    if (e.target.innerText === 'Bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  render() {
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage =
      ((good / (neutral + bad)) * 100) / 2;

    return (
      <div>
        <h2>Please leave feedback</h2>

        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>

        <p>Statistics</p>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        ></Statistics>
      </div>
    );
  }
}

export default Feedback;
