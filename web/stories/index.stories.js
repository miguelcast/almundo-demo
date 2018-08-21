import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Button, Card, Icon } from '../components/shared'
import { Header } from '../components/Header';
import { CardItem, Starts } from '../components/Hotel';
import '../style/global';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ));

storiesOf('Icon', module)
  .add('set', () => (
    <Fragment>
      <Icon type="search" />
      <Icon type="star" />
      <Icon type="bathrobes" />
      <Icon type="bathtub" />
      <Icon type="beach-pool-facilities" />
      <Icon type="beach" />
      <Icon type="business-center" />
      <Icon type="children-clu" />
      <Icon type="coffe-maker" />
      <Icon type="deep-soaking-bathtub" />
      <Icon type="fitness-center" />
      <Icon type="garden" />
      <Icon type="kitchen-facilities" />
      <Icon type="newspaper" />
      <Icon type="nightclub" />
      <Icon type="restaurant" />
      <Icon type="safety-box" />
      <Icon type="separate-bredroom" />
      <Icon type="sheets" />
    </Fragment>
  ))
  .add('with color', () => (
    <Fragment>
      <Icon type="search" color="#3079b4" />
      <Icon type="star" color="#f6bb3d" />
    </Fragment>
  ))
  .add('with size', () => (
    <Fragment>
      <Icon type="search" color="#3079b4" size="1rem" />
      <Icon type="search" color="#3079b4" />
      <Icon type="search" color="#3079b4" size="3rem" />
    </Fragment>
  ));

storiesOf('Starts', module)
  .add('with 3', () => (
    <Starts number={3} />
  ))
  .add('with 5', () => (
    <Starts number={5} />
  ));

storiesOf('Header', module)
  .add('with logo', () => (
    <Header />
  ));

storiesOf('Card', module)
  .add('with text', () => (
    <Card>Content text</Card>
  ));

storiesOf('Hotel', module)
  .add('with one item', () => (
    <CardItem
      image="http://localhost:3001/assets/images/hotels/2a5bb415_b.jpg"
      price="863"
      name="Hotel Stefanos"
      stars={3}
      amenities={['beach', 'garden', 'bathtub']}
    />
  ));
