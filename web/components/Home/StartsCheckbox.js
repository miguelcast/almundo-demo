import React, { Component } from 'react';
import { Box } from 'grid-styled';
import styled from 'styled-components';
import Starts from '../shared/Starts';

const Label = styled.label`
  display: inline-block;
  width: 100%;
  margin-bottom: 0.8rem;
  vertical-align: middle;
  
  & span, input {
    margin-left: 5px;
    vertical-align: middle;
    color: #444;
  }
`;

const listStart = [5, 4, 3, 2, 1];

class StartsCheckbox extends Component {
  state = {
    checked: [],
    all: true,
  };

  checkAll = () => {
    this.setState(prev => ({
      all: !prev.all,
      checked: [],
    }), this.setFilter);
  };

  check = num => {
    const c = [ ...this.state.checked ];
    c[num] = !c[num];
    this.setState({
      all: false,
      checked: c,
    }, this.setFilter);
  };

  setFilter = () => {
    const { setStarts } = this.props;
    const { checked } = this.state;
    let startStr = checked.reduce(
      (acc, val, index) => val === true ? acc + ',' + index : acc, ''
    );
    setStarts(startStr);
  };

  render() {
    const { all, checked } = this.state;


    return (
      <Box width={1}>
        <Label>
          <input type="checkbox" checked={all} name="all" onClick={this.checkAll} />
          <span>Todas las estrellas</span>
        </Label>
        {listStart.map(num => (
          <Label key={`sc${num}`}>
            <input
              type="checkbox"
              checked={all ? false : checked[num]}
              value={num}
              name={`s${num}`}
              onClick={() => this.check(num)}
            />
            <Starts number={num} />
          </Label>
        ))}
      </Box>
    );
  }
}

export default StartsCheckbox;
