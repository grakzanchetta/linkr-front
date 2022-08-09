import styled from "styled-components";

const Container = styled.div`
  background-color: #171717;
  border-radius: 16px;
  padding: 20px;
  display: flex;
`;

const UserContainer = styled.div`
  width: 34.93vw;
  display: flex;
  gap: 7px;
  flex-direction: column;

  h2 {
    font: normal 400 19px "Lato", sans-serif;
    color: #ffffff;
  }

  h3 {
    font: normal 400 17px "Lato", sans-serif;
    color: #b7b7b7;
  }
`;

export { Container, UserContainer };
