

import styled from "styled-components";

const ContainerScroll = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Container = styled.div`
  h1 {
    width: 100%;
    font: normal 700 43px "Oswald", sans-serif;
    color: #ffffff;
    margin-top: 110px;
    margin-bottom: 43px;
  }
`;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export { Container, ContainerScroll, FeedContainer };