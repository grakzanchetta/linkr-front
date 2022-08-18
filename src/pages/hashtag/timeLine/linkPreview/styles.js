import styled from "styled-components";

const LinkContainer = styled.div`
  width: 100%;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  display: flex;
  cursor: pointer;
  @media (max-width: 375px) {
    width: 72.5vw;
  }

  img {
    width: 153.44px;
    height: 155px;
    border-radius: 0px 12px 13px 0px;
    overflow-x: hidden;
  }
`;
const Box = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow-x: hidden;

  h6 {
    width: 100%;
    font: normal 400 16px "Lato", sans-serif;
    color: #cecece;
  }

  h5 {
    width: 100%;
    font: normal 400 11px "Lato", sans-serif;
    color: #9b9595;
  }

  h3 {
    width: 100%;
    font: normal 400 11px "Lato", sans-serif;
    color: #cecece;
  }

  @media (max-width: 375px) {
    h6 {
      font: normal 400 11px "Lato", sans-serif;
    }

    h5 {
      font: normal 400 9px "Lato", sans-serif;
    }

    h3 {
      font: normal 400 9px "Lato", sans-serif;
    }
  }
`;

export { LinkContainer, Box };
