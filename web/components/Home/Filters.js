import React from 'react';
import styled from 'styled-components';
import { Card } from '../shared';
import Tab from './Tab';
import Search from './Search';
import StartsCheckbox from './StartsCheckbox';

const Filters = ({ setName, setStarts }) => (
  <Card bg="#f3f3f4" p={0} flex={{ flexDirection: 'column' }}>
    <Card p={3} shadow={false}>
      <Title>Filtros</Title>
    </Card>
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
  </Card>
);

const Title = styled.strong`
  color: #444444;
  font-size: 1.1rem;
`;

const Separate = styled.div`
  min-height: 5px;
  height: 5px;
`;

export default Filters;
