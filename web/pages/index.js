import React, { Component } from 'react';
import axios from 'axios';
import { Flex, Box } from 'grid-styled';
import ReactLoading from 'react-loading';
import { Filters } from '../components/Home';
import { List } from '../components/Hotel';
import config from '../config';

class Index extends Component {
  state = {
    hotels: [],
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
        <Box width={[1, 1, 9/12]} pl={[0, 0, 3]}>
          {loading ? (
            <ReactLoading type="spin" color="blue" />
          ) : (
            <List hotels={hotels} />
          )}
        </Box>
      </Flex>
    );
  }
};

export default Index;
