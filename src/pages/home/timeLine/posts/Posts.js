import Post from "../post/Post";
import { Container } from "./styles";

export default function Posts({ picture, links }) {
  return (
    <Container>
      {links.map(({ url }, index) => (
        <Post picture={picture} link={url} key={index} />
      ))}
    </Container>
  );
}
