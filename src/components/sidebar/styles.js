import styled from "styled-components";

const Container = styled.div`
  background-color: #171717;
  border-radius: 16px;
  padding: 20px;
  display: flex;
`;

const HashtagContainer = styled.div`
  width: 25vw;
  display: flex;
  gap: 7px;

  h2 {
    font: normal 700 19px "Lato", sans-serif;
    color: #ffffff;
  }


`;

export default { Container, HashtagContainer };
