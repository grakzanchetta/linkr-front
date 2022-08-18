import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  max-height: 300px;
  overflow-y: auto;
  margin-top: ${props => props.visible.marginTop};
  visibility: ${props => props.visible.visibility};
  transition: all 200ms;
  padding-top: 50px;
  padding-bottom: 25px;
  background-color: #1e1e1e;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 39px;
    height: 39px;
    border-radius: 304px;
  }

  span {
    width: 100%;
    padding: 0 25px;
    display: flex;
    gap: 14px;
    margin-top: 10px;
  }
`;

const Comment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 13px 25px;
  gap: 15px;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 18px;

  span {
    width: 100%;
    padding: 0;
    display: flex;
    gap: 14px;
    margin-top: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  h1 {
    display: inline;
    font: normal 700 14px "Lato", sans-serif;
    color: #f3f3f3;
  }

  h2 {
    display: inline;
    font: normal 400 14px "Lato", sans-serif;
    color: #565656;
    margin-left: 5px;
  }

  h3 {
    font: normal 400 16px "Lato", sans-serif;
    color: #acacac;
  }
`;

const Line = styled.div`
  border: 1px solid #353535;
`;

export { Container, Comment, Box, Line };
