import React, { Fragment } from 'react';
import CardItem from './CardItem';

const List = ({ hotels }) => (
  <Fragment>
    {hotels && hotels.map(hotel => (
      <CardItem key={hotel.id} {...hotel} />
    ))}
  </Fragment>
);

export default List;
