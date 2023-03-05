import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>
      Postitive feedback:
      {positivePercentage > 0 ? positivePercentage : 0} %
    </li>
  </ul>
);
export default Statistics;
