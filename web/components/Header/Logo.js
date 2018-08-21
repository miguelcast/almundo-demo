import React from 'react';
import styled from 'styled-components';
import config from '../../config';

const { staticFolder = '' } = config;

const Logo = () => <Image src={`${staticFolder}/images/logo-almundo.svg`} />

const Image = styled.img`
  margin: 0;
  padding: 0;
  display: block;
`;

export default Logo;
