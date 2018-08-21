import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';
import { Card, Button } from '../shared';
import Starts from '../shared/Starts';
import Amenities from './Amenities';
import config from '../../config';

const imagePath = `${config.api || ''}${config.imagePath || ''}`;

const CardItem = ({ image, price, name, stars, amenities }) => (
  <Card flex={{ mb: 3, flexDirection: ['column', 'column', 'row'] }}>
    <WrapperImage width={[1, 1, 2/5]}>
      <Image src={`${imagePath}${image}`} alt={name} />
    </WrapperImage>
    <Box width={[1, 1, 1/2]} pl={[0, 0, 3]} py={[3, 3, 0]} flex='1 1 auto' css={{ position: 'relative' }}>
      <LineDot />
      <Box pb={2}>
        <Title>
          {name}
        </Title>
      </Box>
      <Box pb={3}>
        <Starts number={stars} />
      </Box>
      <Box>
        <Amenities amenities={amenities} />
      </Box>
    </Box>
    <Box width={[1, 1, 1/3]} py={[3, 3, 0]} flex='1 1 auto' alignSelf="center">
      <Flex justifyContent="center" alignItems="center" width={1}>
        <Box width={1} alignSelf="center" css={{ textAlign: 'center' }}>
          <Text>Precio por noche por habitación</Text>
          <Box py={2}>
            <Price>
              <span className="currency">ARS</span> {price}
            </Price>
          </Box>
          <Button size="large">
            Ver hotel
          </Button>
        </Box>
      </Flex>
    </Box>
  </Card>
);

const WrapperImage = styled(Box)`
  position: relative;
  min-height: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Title = styled.span`
  color: #3079b4;
  font-size: 1.2rem;
  font-weight: bold;
`;

const LineDot = styled(Box)`
  position: absolute;
  right: 0;
  width: 0;
  height: 100%;
  border-left: 1px dashed #cccccc;
  
  @media (max-width: 48em) {
    height: 0;
    width: 100%;
    bottom: 0;
    border-left: none;
    border-bottom: 1px dashed #cccccc;
  }
`;

const Text = styled.span`
  display: inline-block;
  width: 80%;
  text-align: center;
  font-size: 14px;
  line-height: 1.5em;
  color: #454545;
  
  @media (max-width: 48em) {
    width: 100%;
  }
`;

const Price = styled.strong`
  color: #e1692d;
  font-size: 2.5rem;
  font-weight: bold;
  
  & > .currency {
    content: 'ARS';
    vertical-align: middle;
    font-size: 1.5rem;
    font-weight: 100;
  }
`;

export default CardItem;
