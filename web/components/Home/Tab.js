import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Icon, withToggle } from '../shared';

class Tab extends Component {
  render() {
    const { icon, title, toggle, expand, children } = this.props;

    return (
      <Fragment>
        <Flex
          onClick={toggle}
          flexDirection="row"
          alignItems="center"
          css={{ color: '#3079b4', cursor: 'pointer' }}>
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
        <Content pt={3} expand={expand ? 1 : 0}>
          {children}
        </Content>
      </Fragment>
    );
  }
}

const Content = styled(Flex)`
  visibility: ${props => props.expand ? 'visible' : 'hidden'};
  ${props => !props.expand && 'display: none;'};
`;

export default withToggle(Tab);
