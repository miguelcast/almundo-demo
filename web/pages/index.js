import React, { Component } from 'react';
import axios from 'axios';
import { Flex, Box } from 'grid-styled';
import ReactLoading from 'react-loading';
import { Filters } from '../components/Home';
import { List } from '../components/Hotel';
import { Loading } from '../components/shared';
import config from '../config';

class Index extends Component {
  state = {
    hotels: [],
    name: null,
    starts: null,
    loading: false,
    error: null,
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
      await this.setState({ hotels, loading: false, error: null });
    } catch (e) {
      console.log('Error get api.');
      await this.setState({ loading: false, error: true });
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

    return (
      <Flex flexDirection={['column', 'column', 'row']}>
        <Box width={[1, 1, 3/12]} >
          <Filters setName={this.setName} setStarts={this.setStarts} />
        </Box>
        <Box width={[1, 1, 9/12]} pl={3} pr={[3, 3, 0]} pt={[3, 3, 0]}>
          {loading ? (
            <Loading />
          ) : (
            <List hotels={hotels} />
          )}
        </Box>
      </Flex>
    );
  }
};

export default Index;
