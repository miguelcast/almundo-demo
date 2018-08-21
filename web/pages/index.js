import React, { Component } from 'react';
import axios from 'axios';
import { Flex, Box } from 'grid-styled';
import { Filters } from '../components/Home';
import { List } from '../components/Hotel';
import { Loading } from '../components/shared';
import config from '../config';

class Index extends Component {
  state = {
    hotels: null,
    name: null,
    starts: null,
    loading: false,
  };

  async componentDidMount() {
    await this.getHotels();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.hotels !== this.state.hotels ||
           nextState.name !== this.state.name ||
           nextState.starts !== this.state.starts ||
           nextState.loading !== this.state.loading;
  }

  getHotels = async () => {
    try {
      const { name, starts } = this.state;
      await this.setState({ loading: true });
      const res = await axios.get(config.api, { params: {
        name,
        starts,
      }});
      const hotels = await res.data;
      await this.setState({ hotels, loading: false });
    } catch (e) {
      console.log('Error get api.');
      await this.setState({ loading: false });
    }
  };

  setName = name => {
    this.setState({ name }, this.getHotels);
  };

  setStarts = starts => {
    this.setState({ starts }, this.getHotels);
  };

  render() {
    const { hotels, loading } = this.state;

    const message = hotels === null ? '' : (
      <span style={{ color: '#444444' }}>
        No se encontraron hoteles con los filtros seleccionados.<br />
        Cambia la configuración de filtros.
      </span>
    );

    return (
      <Flex flexDirection={['column', 'column', 'row']}>
        <Box width={[1, 1, 3/12]} >
          <Filters setName={this.setName} setStarts={this.setStarts} />
        </Box>
        <Box width={[1, 1, 9/12]} pl={3} pr={[3, 3, 0]} pt={[3, 3, 0]}>
          {loading ? (
            <Loading />
          ) : (
            hotels && hotels.length > 0 ? (
              <List hotels={hotels} />
            ) : message
          )}
        </Box>
      </Flex>
    );
  }
};

export default Index;
