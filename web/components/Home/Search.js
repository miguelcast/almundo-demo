import { Box } from 'grid-styled';
import React, { Fragment, Component } from 'react';
import { Button } from '../shared';
import Field from './Field';

class Search extends Component {
  state = {
    value: '',
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.value !== this.state.value;
  }

  onChange = event => this.setState({ value: event.target.value });

  handleClick = () => {
    const { setSearch } = this.props;
    setSearch(this.state.value);
  };

  render() {
    return (
      <Fragment>
        <Box width={3/4} alignSelf="center">
          <Field placeholder="Ingrese el nombre del hotel" onChange={this.onChange} />
        </Box>
        <Box width={1/4} alignSelf="center" css={{ textAlign: 'right' }}>
          <Button onClick={this.handleClick}>Aceptar</Button>
        </Box>
      </Fragment>
    );
  }
}

export default Search;
