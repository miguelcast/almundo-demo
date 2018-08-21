import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Card } from '../shared';
import Tab from './Tab';
import Search from './Search';
import StartsCheckbox from './StartsCheckbox';
import { withToggle } from '../shared';

class Filters extends PureComponent {
  render() {
    const { setName, setStarts, toggle, expand } = this.props;

    return (
      <Card bg="#f3f3f4" p={0} flex={{ flexDirection: 'column' }}>
        <Card p={3} shadow={false}>
          <Title onClick={toggle}>
            Filtros <span>&#9662;</span>
          </Title>
        </Card>
        <Content expand={expand}>
          <Separate />
          <Card p={3} shadow={false} flex={{ flexDirection: 'column' }}>
            <form onSubmit={e => e.preventDefault()}>
              <Tab title="Nombre de hotel" icon="search">
                <Search setSearch={setName} />
              </Tab>
            </form>
          </Card>
          <Separate />
          <Card p={3} shadow={false} flex={{ flexDirection: 'column' }}>
            <Tab title="Estrellas" icon="star">
              <StartsCheckbox setStarts={setStarts} />
            </Tab>
          </Card>
          <Separate />
        </Content>
      </Card>
    );
  }
}

const Title = styled.strong`
  color: #444444;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 48em) {
    display: inline-block;
    width: 100%;
    color: #0679b3;
    text-align: center;
  }
`;

const Separate = styled.div`
  min-height: 5px;
  height: 5px;
`;

const Content = styled.div`
  visibility: ${props => props.expand === true ? 'visible' : 'hidden'};
  ${props => props.expand !== true && 'display: none;'};
`;

export default withToggle(Filters);
