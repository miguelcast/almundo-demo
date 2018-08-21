import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 7px;
  border-radius: 2px;
  border: 1px solid #cccccc;
  font-size: 1.2rem;
`;

const Field = props => <InputStyled type="text" {...props} />;

export default Field;
