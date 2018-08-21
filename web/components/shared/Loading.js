import react from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

const Loading = () => (
  <Wrapper>
    <ReactLoading type="spin" color="blue" />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  margin-left: 50%;
  & > div {
    transform: translate(-%50);
  }
`;

export default Loading;
