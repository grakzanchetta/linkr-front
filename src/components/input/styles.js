import styled from "styled-components";

const Container = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  padding-left: 14px;
  padding: ${props => props.padding};
  border: ${props => props.border};
  box-shadow: ${props => props.boxShadow};
  border-radius: ${props => props.borderRadius};
  background-color: ${props => props.backGround};
  font: normal 400 14px "Roboto", sans-serif;
  color: ${props => props.color};

  ::placeholder {
    color: #7e7e7e;
  }

  :focus {
    outline: 2px solid rgba(120, 177, 89, 0.25);
  }
`;

export { Container };
