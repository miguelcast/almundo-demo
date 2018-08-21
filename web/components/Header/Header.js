import React from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import Logo from './Logo';

const Header = () => (
  <HeaderStyled alignItems="center">
    <Logo />
  </HeaderStyled>
);

const HeaderStyled = styled(Flex)`
  box-sizing: border-box;
  background-image: linear-gradient(to bottom right, #032c73, #0c397c);
  height: 80px;
  padding-left: 12px;
  border-bottom: 10px #4c789c;
  
  @media (max-width: 48em) {
    height: 64px;
  }
`;

export default Header;
