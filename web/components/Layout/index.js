import React, { Fragment } from 'react';
import { Box } from 'grid-styled';
import { Header } from '../Header';

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <Box p={3}>
      {children}
    </Box>
  </Fragment>
);

export default Layout;
