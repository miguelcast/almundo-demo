import react, { Component } from 'react';

const withToggle = Comp => {
  return class WrapperComp extends Component {
    state = {
      expand: true,
    };

    toggle = () => {
      this.setState((prev) => ({
        expand: !prev.expand,
      }));
    }

    render() {
      return <Comp {...this.props} expand={this.state.expand} toggle={this.toggle} />;
    }
  };
};

export default withToggle;
