import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from '../Sections/Section';
import Notification from '../Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    console.dir(e.target.textContent);
    if (e.target.textContent === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    }
    if (e.target.textContent === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    }
    if (e.target.textContent === 'bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  countTotalFeedback = () => {
    const valuesArray = Object.values(this.state);
    return valuesArray.reduce((acc, val) => {
      acc += val;
      return acc;
    });
  };

  countPositiveFeedbackPercentage = () => {
    return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const btnNames = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={btnNames}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {good > 0 || neutral > 0 || bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification title="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
