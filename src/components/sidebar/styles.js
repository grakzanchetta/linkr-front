import styled from "styled-components";

const Container = styled.div`
  background-color: #171717;
  border-radius: 16px;
  margin-left: 10px;
  padding: 20px;
  display: flex;
  height: 380px;
  width: 15vw;
  flex-wrap: wrap;
  @media (max-width: 375px) {
    display: none;
  }
`;

const HashtagContainer = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-x: hidden;
  gap: 7px;
  h2 {
    font: normal 700 19px "Lato", sans-serif;
    color: #ffffff;
    cursor: pointer;
  }
  h1 {
    font: normal 700 27px "Lato", sans-serif;
    color: #ffffff;
  }
`;

const Linha = styled.div`
  display: flex;
  flex-direction: row;
  height: 1px;
  background-color: #484848;
`;

export { Container, HashtagContainer, Linha };
