import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Icon } from './index';

const Starts = ({ number = 1 }) => {
  return (
    <Fragment>
      {Array.from(Array(number)).map((item, index) => (
        <Item key={`N${index}`}>
          <Icon type="star" color="#f6bb3d" size="1.2rem" />
        </Item>
      ))}
    </Fragment>
  );
}

const Item = styled.span`
  padding-right: 0.3rem;
`;

export default Starts;
