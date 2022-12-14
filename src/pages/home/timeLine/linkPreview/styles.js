import styled from "styled-components";

const LinkContainer = styled.div`
  width: 34.93vw;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  display: flex;
  cursor: pointer;
  width: 98%;
 

  img {
    width: 153.44px;
    height: 155px;
    border-radius: 0px 12px 13px 0px;
    overflow-x: hidden;
  }
`;
const Box = styled.div`
  width: 34.93vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow-x: hidden;

  h6 {
    font: normal 400 16px "Lato", sans-serif;
    color: #cecece;
  }

  h5 {
    font: normal 400 11px "Lato", sans-serif;
    color: #9b9595;
  }

  h3 {
    font: normal 400 11px "Lato", sans-serif;
    color: #cecece;
  }
`;

export { LinkContainer, Box };
