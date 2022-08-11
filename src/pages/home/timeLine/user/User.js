import Likes from "../post/Likes";
import { Container } from "./styles";

export default function User({ picture, likes, id, index }) {
  return (
    <Container>
      <img src={picture} alt="user" />
      {hanleLikes(likes, id, index)}
    </Container>
  );
}

const hanleLikes = (likes, id, index) =>
  likes === undefined ? null : <Likes likes={likes} id={id} index={index} />;
