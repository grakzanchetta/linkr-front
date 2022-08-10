import User from "../user/User";
import LinkPreview from "../linkPreview/LinkPreview";
import { Container, UserContainer } from "./styles";

export default function Post({ data }) {
  const { username, pictureUrl, postUrl, postText, isAuthor } = data;

  return (
    <Container>
      <User picture={pictureUrl} />
      <UserContainer>
        <h2>{username}</h2>
        <h3>{postText}</h3>
        <LinkPreview link={postUrl} />
      </UserContainer>
    </Container>
  );
}
