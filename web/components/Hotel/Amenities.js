import React, { Fragment } from 'react';
import styled from "styled-components";
import { Icon } from '../shared';

const Amenities = ({ amenities = [] }) => (
  <Fragment>
    {amenities.map(amenity => (
      <Item key={amenity}>
        <Icon type={amenity} size="1.6rem" />
      </Item>
    ))}
  </Fragment>
);

const Item = styled.span`
  padding-right: 0.8rem;
`;

export default Amenities;
