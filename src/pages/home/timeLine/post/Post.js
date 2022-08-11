import User from "../user/User";
import LinkPreview from "../linkPreview/LinkPreview";
import { Container, UserContainer } from "./styles";

export default function Post({ data, index }) {
  const { id, username, pictureUrl, postUrl, postText, likes, isAuthor } = data;

  return (
    <Container>
      <User picture={pictureUrl} likes={likes} id={id} index={index} />
      <UserContainer>
        <h2>{username}</h2>
        <h3>{postText}</h3>
        <LinkPreview link={postUrl} />
      </UserContainer>
    </Container>
  );
}
