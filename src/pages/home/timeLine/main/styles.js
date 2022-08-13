import styled from "styled-components";

const ContainerScroll = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
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

export { Container, ContainerScroll };
