import React from 'react';
import { Sections, Div } from './Sections.styled';

const Section = ({ title, children }) => (
  <Sections>
    <Div>
      <h2>{title}</h2>
      {children}
    </Div>
  </Sections>
);
export default Section;
