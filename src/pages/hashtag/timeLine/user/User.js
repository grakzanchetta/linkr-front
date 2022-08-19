import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../../../context/globalContext";
import Likes from "../post/Likes";
import { Comments } from "../../../home/timeLine/user/styles";
import { IconComment } from "../../../home/timeLine/user/styles";
import { Retweet } from "../post/styles";
import NOT_FOUND from "../../../../assets/images/404.jpg";
import { Container } from "./styles";

function User(props) {
  let { picture, likes, id, index, userId, num, setComments, rePost } = props;
  const { setModal } = props;

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
      {rePost && num !== undefined ? (
        <>
          <Comments onClick={() => setComments(prev => !prev)}>
            <IconComment />
            <h6>{num} comments</h6>
          </Comments>
          <Comments onClick={() => setModal(true)}>
            <Retweet />
            <h6>{rePost} re-post</h6>
          </Comments>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}

const hanleLikes = (likes, id, index) =>
  likes === undefined ? null : <Likes likes={likes} id={id} index={index} />;

export default User;
