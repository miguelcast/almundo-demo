import React from 'react';
import styled, { css } from 'styled-components';
import { Flex } from 'grid-styled';

const Card = ({ bg = '#ffffff', p = 2, shadow = true, flex, children }) => (
  <CardStyled shadow={shadow} width={1} p={p} bg={bg} {...flex}>
    {children}
  </CardStyled>
);

const CardStyled = styled(Flex)`
  box-shadow: ${props => props.shadow === true 
    ? '0 2px 5px rgba(196, 197, 198, 0.23)'
    : 'none'};
`;

export default Card;
