import { useGlobal } from "../../../../../context/globalContext";
import Form from "../form/Form";
import { Container, Comment, Box, Line } from "./styles";

function Comments({ commentsBox, postId, comments, setComments }) {
  const { global } = useGlobal();

  const visible = () => {
    if (commentsBox === true)
      return { visibility: "visible", marginTop: "-50px" };

    return { visibility: "hidden", marginTop: "-150px" };
  };

  return (
    <Container visible={visible()}>
      {comments?.map(
        ({ pictureUrl, username, comment, isAuthor, follow }, index) => (
          <Comment key={index}>
            <Box>
              <img src={pictureUrl} alt="picture" />
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
        <img src={global.user.pictureUrl} alt="picture" />
        <Form postId={postId} setComments={setComments} />
      </span>
    </Container>
  );
}

export default Comments;
