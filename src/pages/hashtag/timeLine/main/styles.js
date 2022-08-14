

import styled from "styled-components";

const ContainerScroll = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Container = styled.div`
  
  width: 57vw;
  @media (max-width: 375px) {
    margin-top: 19px;
    margin-bottom: -19px;
  }
  
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
  @media (max-width: 375px) {
    width: 100vw;
  }
  
`

export { Container, ContainerScroll, FeedContainer };