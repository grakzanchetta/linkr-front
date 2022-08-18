import styled from "styled-components";
import { AiOutlineComment } from "react-icons/ai";

const Container = styled.div`
  width: 100px;
  height: 100%;
  padding-right: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    cursor: pointer;
  }
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h6 {
    font: normal 400 11px "Lato", sans-serif;
    color: #ffffff;
  }
`;

const IconComment = styled(AiOutlineComment)`
  width: 25px;
  height: 25px;
  color: #ffffff;
`;

export { Container, IconComment, Comments };
