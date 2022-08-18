import styled from "styled-components";
import { IoPaperPlaneOutline } from "react-icons/io5";

const InputBox = styled.div`
  width: ${props => props.width};
  height: 39px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-radius: 8px;
  background-color: ${props => props.backGround};

  input {
    width: calc(${props => props.width} - 35px);
    height: calc(39px - 6px);
    border: none;
    border-radius: 12px;
    font: normal 400 14px "Roboto", sans-serif;
    color: #ffffff;
    padding-left: 14px;
    background-color: ${props => props.backGround};

    ::placeholder {
      color: #7e7e7e;
    }
  }

  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  &:focus-within {
    outline: 2px solid #5294e2;
  }

  div {
    width: 50px;
    height: ${props => props.height};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    border: none;
    background-color: inherit;
  }
`;

const Plane = styled(IoPaperPlaneOutline)`
  width: 25px;
  height: 25px;
  color: #ffffff;
`;

export { InputBox, Plane };
