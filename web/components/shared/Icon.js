import React from 'react';
import styled from 'styled-components';

const I = styled.i`
  color: ${props => props.color};
  font-size: ${props => props.size};
`;

const Icon = ({ type, color = '#444444', size = '2rem' }) => (
  <I className={`icon-${type}`} color={color} size={size} />
);

export default Icon;
