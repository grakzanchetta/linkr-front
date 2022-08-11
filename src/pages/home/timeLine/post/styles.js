import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

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

const LikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  h6 {
    font: normal 400 11px "Lato", sans-serif;
    color: #ffffff;
  }

  h4 {
    font: normal 700 13px "Lato", sans-serif;
    color: #505050;
  }
`;

const RegHeart = styled(FaRegHeart)`
  color: #ffffff;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Heart = styled(FaHeart)`
  color: #ac0000;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export { Container, UserContainer, LikesContainer, RegHeart, Heart };
