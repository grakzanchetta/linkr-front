import { useGlobal } from "../../../../../context/globalContext";
import Form from "../form/Form";
import NOT_FOUND from "../../../../../assets/images/404.jpg";
import { Container, Comment, Box, Line } from "./styles";

function Comments({ commentsBox, postId, comments, setComments }) {
  const { global } = useGlobal();

  const visible = () => {
    if (commentsBox === true) return { display: "flex", marginTop: "-50px" };

    return { display: "none", marginTop: "-150px" };
  };

  return (
    <Container visible={visible()}>
      {comments?.map(
        ({ pictureUrl, username, comment, isAuthor, follow }, index) => (
          <Comment key={index}>
            <Box>
              <img
                src={pictureUrl}
                alt="picture"
                onError={e => (e.target.src = NOT_FOUND)}
              />
              <div>
                <span>
                  <h1>{username}</h1>
                  <h2>
                    {isAuthor ? "• post’s author" : null}{" "}
                    {follow ? "• following" : null}
                  </h2>
                </span>
                <h3>{comment}</h3>
              </div>
            </Box>
            <Line></Line>
          </Comment>
        )
      )}
      <span>
        <img
          src={global.user.pictureUrl}
          alt="picture"
          onError={e => (e.target.src = NOT_FOUND)}
        />
        <Form postId={postId} setComments={setComments} />
      </span>
    </Container>
  );
}

export default Comments;
