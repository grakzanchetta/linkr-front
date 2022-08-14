import { Link } from "react-router-dom";
import Likes from "../post/Likes";
import NOT_FOUND from "../../../../assets/images/404.jpg";
import { Container } from "./styles";

export default function User({ picture, likes, id, index, userId }) {
  return (
    <Container>
      <Link to={`/user/${userId}`}>
        <img
          src={picture}
          onError={e => (e.target.src = NOT_FOUND)}
          alt="user"
        />
      </Link>
      {hanleLikes(likes, id, index)}
    </Container>
  );
}

const hanleLikes = (likes, id, index) =>
  likes === undefined ? null : <Likes likes={likes} id={id} index={index} />;
