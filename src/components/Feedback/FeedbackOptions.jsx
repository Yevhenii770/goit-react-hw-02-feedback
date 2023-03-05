import React from 'react';
import { Ul, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Ul>
    {options.map((option, index) => (
      <li key={index}>
        <Button type="button" onClick={onLeaveFeedback}>
          {option}
        </Button>
      </li>
    ))}
  </Ul>
);

export default FeedbackOptions;
