import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

const Container = styled.div`
  width: 39.09vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e7e7e7;
  position: relative;

  @media (max-width: 375px) {
    margin-top: 138px;
    margin-bottom: 19px;
    align-items: center;
  }
`;

const Input = styled(DebounceInput)`
  width: 100%;
  height: 43px;
  background-color: #ffffff;
  border: none;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: 98.5% 50%;
  padding-left: 20px;
  padding-right: 33px;

  @media (max-width: 375px) {
    width: 100vw;
  }
`;

const Box = styled.div`
  width: 100%;
  max-height: 350px;
  overflow-y: auto;
  margin-top: 43px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #e7e7e7;
  z-index: 2;
  position: absolute;
  cursor: pointer;

  @media (max-width: 375px) {
    width: 100vw;
  }

`;

const UserContainer = styled.div`
  width: 100%;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 39px;
    height: 39px;
    border-radius: 304px;
  }

  span {
    font: normal 400 19px "Lato", sans-serif;
    color: #515151;  
  }
`;

export { Container, Input, UserContainer, Box };
