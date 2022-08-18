import { useNavigate } from "react-router-dom";
import NOT_FOUND from "../../../../assets/images/404.jpg";
import { useGlobal } from "../../../../context/globalContext";
import Likes from "../post/Likes";
import { Container, Comments, IconComment } from "./styles";

function User({ picture, likes, id, index, userId, num, setCommentsBox }) {
  const { global } = useGlobal();
  const navigate = useNavigate();

  function redirect() {
    if (userId === undefined) userId = global.user.id;

    navigate(`/user/${userId}`);
  }

  return (
    <Container>
      <img
        src={picture}
        onError={e => (e.target.src = NOT_FOUND)}
        alt="user"
        onClick={redirect}
      />
      {hanleLikes(likes, id, index)}
      <Comments onClick={() => setCommentsBox(prev => !prev)}>
        <IconComment />
        <h6>{num} comments</h6>
      </Comments>
    </Container>
  );
}

const hanleLikes = (likes, id, index) =>
  likes === undefined ? null : <Likes likes={likes} id={id} index={index} />;

export default User;
