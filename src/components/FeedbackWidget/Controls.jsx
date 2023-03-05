import React from 'react';

const Controls = ({ onIncrement, onDecrement, initValue }) => (
  <div>
    <button type="button" onClick={onDecrement}></button>
    <span className="">{initValue}</span>
    <button type="button" onClick={onIncrement}></button>
  </div>
);
export default Controls;
