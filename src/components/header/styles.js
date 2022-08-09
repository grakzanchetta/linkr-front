import styled from "styled-components";
import { IoChevronDown } from "react-icons/io5";

const Container = styled.header`
  width: 100vw;
  background-color: #151515;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;

  h1 {
    font: normal 700 49px "Passion One", cursive;
    color: #ffffff;
  }

  img {
    width: 53px;
    height: 53px;
    border-radius: 26.5px;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const ArrowDown = styled(IoChevronDown)`
  width: 40.38px;
  height: 40.38px;
  color: #ffffff;
  transform: rotate(${props => props.rotate});
  cursor: pointer;
`;

const Menu = styled.div`
  width: calc(40.38px + 53px + 15px + 35px);
  padding: 20px;
  border-radius: 0px 0px 20px 20px;
  background-color: #171717;
  font: normal 700 17px "Lato", sans-serif;
  color: #ffffff;
  letter-spacing: 0.05em;
  text-align: center;
  position: absolute;
  bottom: ${props => props.bottom};
  right: 0;
  visibility: ${props => props.visibility};
  transition: all 240ms;
  cursor: pointer;
`;

export { Container, ArrowDown, UserContainer, Menu };
