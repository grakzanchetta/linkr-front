import Likes from "../post/Likes";
import { Container } from "./styles";

export default function User({ picture, likes, id }) {
  return (
    <Container>
      <img src={picture} alt="user" />
      {hanleLikes(likes, id)}
    </Container>
  );
}

const hanleLikes = (likes, id) =>
  likes === undefined ? null : <Likes likes={likes} id={id} />;
