import React, { Fragment } from 'react';
import { Flex, Box } from 'grid-styled';
import { Icon } from '../shared';

const Tab = ({ icon, title, children }) => (
  <Fragment>
    <Flex
      flexDirection="row"
      alignItems="center"
      css={{ color: '#3079b4' }}>
      <Box width={1/10}>
        <Icon type={icon} color="#3079b4" size="1.4rem" />
      </Box>
      <Box width={8/10} css={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
        {title}
      </Box>
      <Box width={1/10} css={{ textAlign: 'right', fontSize: '1.2rem' }}>
        &#9662;
      </Box>
    </Flex>
    <Flex pt={3}>{children}</Flex>
  </Fragment>
);

export default Tab;
