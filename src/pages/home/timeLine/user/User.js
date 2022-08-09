import { Container } from "./styles";

export default function User({ picture }) {
  return (
    <Container>
      <img src={picture} alt="user" />
    </Container>
  );
}
