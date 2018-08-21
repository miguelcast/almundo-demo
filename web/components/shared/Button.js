import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ size = 'medium', onClick, children }) => (
  <ButtonStyled type="submit" size={size} onClick={onClick}>
    {children}
  </ButtonStyled>
);

const ButtonStyled = styled.button`
  background-color: #002979;
  color: #fff;
  border-radius: 4px;
  border-width: 0 0 3px 0;
  border-bottom-color: #01153d;
  font-size: ${props => props.size === 'large' ? '1.2rem' : '14px'};
  padding: 10px 8px 10px 8px;
  ${props => props.size === 'large' && css`
    width: 60%;
    @media (max-width: 48em) {
      width: 100%;
    }
  `}
`;

export default Button;
