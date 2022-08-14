

import styled from "styled-components";

const ContainerScroll = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Container = styled.div`
  
  width: 57vw;

  h1 {
    width: 100%;
    font: normal 700 43px "Oswald", sans-serif;
    color: #ffffff;
    margin-top: 110px;
    margin-bottom: 43px;
  
    @media (max-width: 375px) {
    margin-top: 125px;
    margin-bottom: 10px;
  }
  }
`;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export { Container, ContainerScroll, FeedContainer };