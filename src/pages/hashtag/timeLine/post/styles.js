import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

const Container = styled.div`
  background-color: #171717;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  @media (max-width: 375px) {
    width: 100vw;
  }
`;

const UserContainer = styled.div`
  width: 34.93vw;
  display: flex;
  gap: 7px;
  flex-direction: column;
  flex-wrap: wrap;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

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

  .tooltip {
    height: 24px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;

    h5 {
      font: normal 700 16px "Lato", sans-serif;
      color: #505050;
    }
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

const IconsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Trash = styled(FaTrash)`
  width: 14px;
  height: 14px;
  color: #ffffff;
  cursor: pointer;
`;

const Pencil = styled(FaPencilAlt)`
  width: 14px;
  height: 14px;
  color: #ffffff;
  cursor: pointer;
`;

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.9)"
  },
  content: {
    width: "597px",
    height: "262px",
    padding: "0 100px",
    paddingTop: "30px",
    backgroundColor: "#333333",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "50px",
    font: "normal 700 34px 'Lato', sans-serif",
    color: "#ffffff",
    textAlign: "center"
  }
};

const divStyle = {
  marginTop: "39px"
};

const buttonStyle1 = {
  border: "none",
  backgroundColor: "#ffffff",
  borderRadius: "5px",
  color: "#1877F2",
  padding: "8px 20px",
  font: "normal 700 18px 'Lato', sans-serif",
  marginRight: "27px"
};

const buttonStyle2 = {
  border: "none",
  backgroundColor: "#1877F2",
  borderRadius: "5px",
  color: "#ffffff",
  padding: "8px 20px",
  font: "normal 700 18px 'Lato', sans-serif"
};

const tagStyle = {
  color: "white",
  fontWeight: 700,
  display: "inline"
};
const mentionStyle = {};

export {
  Container,
  UserContainer,
  LikesContainer,
  RegHeart,
  Heart,
  IconsContainer,
  Pencil,
  Trash,
  modalStyle,
  divStyle,
  buttonStyle1,
  buttonStyle2,
  tagStyle,
  mentionStyle
};
